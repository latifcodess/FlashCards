import type { HttpContext } from '@adonisjs/core/http'
import Card from '#models/card'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({view}: HttpContext) {
    const card = await Card.query().orderBy('question','asc')
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

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