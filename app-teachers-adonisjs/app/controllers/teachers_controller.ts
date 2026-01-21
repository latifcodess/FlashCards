import Section from '#models/section'
import Teacher from '#models/teacher'
import { teacherValidator } from '#validators/teacher'
import type { HttpContext } from '@adonisjs/core/http'

export default class TeachersController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    //
    // Récupérer la liste des enseignants triés par ordre alphabétique sur le nom et le prénom
    const teachers = await Teacher.query().orderBy('lastname','asc').orderBy('firstname', 'asc')

    // Appel de la vue
    return view.render('pages/home', { teachers })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    const section = await Section.query().orderBy('name', 'asc')

    return view.render('pages/teachers/create', {title: "Ajout d'un enseignant"})
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response }: HttpContext) {
    const {gender, firstname, lastname, nickname, origine, sectionId} = await request.validateUsing(teacherValidator)

    const teacher = await Teacher.create({gender, firstname, lastname, nickname, origine, sectionId})

    session.flash('success', `Le nouvel enseignant ${teacher.lastname} ${teacher.firstname} a été ajouté avec succès !`)

    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const teacher = await Teacher.query().where('id', params.id).preload('section').firstOrFail()

    return view.render('pages/teachers/show.edge', {title: "Détails d'un enseignant", teacher})
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