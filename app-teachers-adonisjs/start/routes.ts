/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import TeachersController from '#controllers/teachers_controller'
import SectionsController from '#controllers/sections_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [TeachersController, 'index']).as('home')
router.get('/teacher/:id/show', [TeachersController, 'show']).as('teacher.show')
router.get('/teacher/add', [TeachersController, 'create']).as('teacher.create')
router.post('/teacher/add', [TeachersController, 'store']).as('teacher.store')
router.delete('/teacher/:id/destroy', [TeachersController, 'destroy']).as('teacher.destroy')
router.get('/teacher/:id/edit', [TeachersController, 'edit']).as('teacher.edit')
router.put('teacher/:id/update', [TeachersController, 'update']).as('teacher.update')

router.get('/sections', [SectionsController, 'index']).as('section.home')
router.delete('/sections/:id/destroy', [SectionsController, 'destroy']).as('section.destroy')