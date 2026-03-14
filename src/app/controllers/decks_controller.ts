import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import Card from '#models/card'
import { deckValidator } from '#validators/deck'
import db from '@adonisjs/lucid/services/db'

export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    // selectionne les decks dans la db, ensuite les cards et comptes les cards en faisant la sous-requête (jointure) : cards.deck_id = decks.id
    // pour separer le nombre de cartes de chaque deck
    const decks = await Deck.query()
      .select('*')
      .select(db.from('cards').count('*').whereRaw('cards.deck_id = decks.id').as('cards_count'))
      .orderBy('created_at', 'desc')
    // affiche la page d'acceuil
    return view.render('pages/home', { decks })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    // affiche la page avec le formulaire pour crée un deck
    return view.render('pages/decks/create', { title: "Ajout d'un deck" })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    // valide les entrées
    const { description, title } = await request.validateUsing(deckValidator())

    // crée le deck dans la base de données
    const deck = await Deck.create({ title, description })

    // affiche un message flash
    session.flash('success', `le nouveau deck ${deck.title} a été ajouté avec succès !`)

    // redirige vers la page d'acceuil
    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    // cherche le deck selectionné via son id
    const deck = await Deck.query().where('id', params.id).firstOrFail()

    // cherche les cartes via l'id du deck
    const cards = await Card.query().where('deck_id', params.id).orderBy('createdAt', 'desc')

    // affiche la page d'info pour le deck en question
    return view.render('pages/decks/show', { title: "Détail d'un deck", deck, cards })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    // cherche le deck via id, si deck pas trouvé : erreur
    const deck = await Deck.findOrFail(params.id)

    return view.render('pages/decks/edit.edge', { title: 'Modifier un deck', deck })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, session, response }: HttpContext) {
    
    // cherche le deck via id, si deck pas trouvé : erreur
    const deck = await Deck.findOrFail(params.id)

    // valide les données entrée
    const { title, description } = await request.validateUsing(deckValidator(deck.id))

    // remplace les anciennes donnée par les nouvelles
    deck.merge({
      title,
      description,
    })

    // sauvegarde dans la base de données
    const deckUpdated = await deck.save()

    // affiche un message flash
    session.flash('success', ` Le deck ${deckUpdated.title} a été mis à jour avec succès !`)

    // redirige vers la page d'acceuil
    return response.redirect().toRoute('home')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    // cherche le deck via id, si deck pas trouvé : erreur
    const deck = await Deck.findOrFail(params.id)

    // supprime le deck dans la base de données
    await deck.delete()

    // affiche un message flash
    session.flash('success', `Le deck ${deck.title} a été supprimé avec succès !`)

    // redirige vers la page d'acceuil
    return response.redirect().toRoute('home')
  }

  async exercise({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)

    const cards = await Card.query().where('deckId', params.id).orderBy('created_at', 'asc')

    return view.render('pages/decks/exercise', { title: "Exercise d'un deck", deck, cards })

  }
}
