import type { HttpContext } from '@adonisjs/core/http'
import Deck from '#models/deck'
import { title } from 'process'

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
    const deck = await Deck.query().orderBy('title', 'asc')

    return view.render('pages/decks/create', {title: "Ajout d'un deck"})
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

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