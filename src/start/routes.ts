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
import Deck from '#models/deck'
import router from '@adonisjs/core/services/router'

router.get('/', [DecksController, 'index']).as('home')
router.get('/deck/add', [DecksController, 'create']).as('deck.create')
router.post('/deck/add', [DecksController, 'store']).as('deck.store')