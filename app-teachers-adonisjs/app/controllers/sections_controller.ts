import Section from '#models/section'
import type { HttpContext } from '@adonisjs/core/http'

export default class SectionsController {
      /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const sections = await Section.query().orderBy('name', 'asc')

    return view.render('pages/sections/home', {sections})
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {

  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {

  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {

  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {

  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, session, response }: HttpContext) {

  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const section = await Section.findOrFail(params.id)
    
    await section.delete()
    
    session.flash('success', `La section ${section.name} a été supprimé avecsuccès !`)
    
    return response.redirect().toRoute('home')
  }
}