import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import { deckValidator } from '#validators/deck'
import { request } from 'http'
import db from '@adonisjs/lucid/services/db'


export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {
    // cherche les deck dans la db
    const decks = await Deck.query().select('*').select(db.from('cards').count('*').whereRaw('cards.deck_id = decks.id').as('cards_count')).orderBy('title', 'asc')

    // affiche la page d'acceuil
    return view.render('pages/home', {decks})
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    // affiche la page avec le formulaire pour crée un deck
    return view.render('pages/decks/create', {title: "Ajout d'un deck"})
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    // valide les entrées
    const {description, title} = await request.validateUsing(deckValidator)

    // crée le deck dans la base de données
    const deck = await Deck.create({title, description})
    
    // affiche un message flash
    session.flash('success', `le nouveau deck ${deck.title} a été ajouté avec succès !`)

    // redirige vers la page d'acceuil
    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    // 
    const deck = await Deck.query().where('id', params.id).firstOrFail()

    return view.render('pages/decks/show', {title: "Détail d'un deck", deck})
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)

    return view.render('pages/decks/edit.edge', {title: 'Modifier un deck', deck})
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, session, response }: HttpContext) {
        const { title, description } = await request.validateUsing(deckValidator)

    const deck = await Deck.findOrFail(params.id)

    deck.merge({
      title,
      description,
    })

    const deckUpdated = await deck.save()

    session.flash('success', ` Le deck ${deckUpdated.title} a été mis à jour avec succès !`)

    return response.redirect().toRoute('home')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)

    await deck.delete()
    session.flash('success', `Le deck ${deck.title} a été supprimé avec succès !`)

    return response.redirect().toRoute('home')
  }
}