/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import DecksController from '#controllers/decks_controller'
import deck_seeder from '#database/seeders/deck_seeder'
import router from '@adonisjs/core/services/router'

router.get('/', [DecksController, 'index']).as('home')
