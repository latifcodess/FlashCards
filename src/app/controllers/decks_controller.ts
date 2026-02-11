import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import { deckValidator } from '#validators/deck'


export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {
    const decks = await Deck.query().orderBy('title', 'asc').orderBy('description', 'asc')

    return view.render('pages/home', {decks})
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/decks/create', {title: "Ajout d'un deck"})
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    const {description, title} = await request.validateUsing(deckValidator)

    const deck = await Deck.create({title, description})
    
    session.flash('success', `le nouveau deck ${deck.title} a été ajouté avec succès !`)

    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).firstOrFail()

    return view.render('pages/decks/show', {title: "Détail d'un deck", deck})
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

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