import type { HttpContext } from '@adonisjs/core/http'
import Card from '#models/card'
import Deck from '#models/deck'
import { cardValidator } from '#validators/card'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({ view, params }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).firstOrFail()
    return view.render('pages/cards/create', { title: "Ajout d'une carte", deck })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response, params }: HttpContext) {
    const {question, answer} = await request.validateUsing(cardValidator)

    // crée le deck dans la base de données
    await Card.create({ question, answer, deckId: params.deckId})

    // affiche un message flash
    session.flash('success', `une nouvelle carte a été ajouté avec succès !`)

    // redirige vers la page d'acceuil
    return response.redirect().toRoute('deck.show', { id: params.deckId })
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const card = await Card.query().where('id', params.id).firstOrFail()

    return view.render('pages/cards/show',{ title: "Détail d'une carte", card })
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
  async destroy({ params }: HttpContext) {}
}
