/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import DecksController from '#controllers/decks_controller'
import Card from '#models/card'
import Deck from '#models/deck'
import router from '@adonisjs/core/services/router'

// route pour les decks
router.get('/', [DecksController, 'index']).as('home')
router.get('/deck/add', [DecksController, 'create']).as('deck.create')
router.post('/deck/add', [DecksController, 'store']).as('deck.store')
router.get('/deck/:id/show/', [DecksController, 'show']).as('deck.show')
router.delete('/deck/:id/destroy', [DecksController, 'destroy']).as('deck.destroy')
router.get('/deck//:id/edit', [DecksController, 'edit']).as('deck.edit')
router.put('/deck/:id/update', [DecksController, 'update']).as('deck.update')

// route pour les cartes
router.get('deck/:id/card/add', [CardsController, 'create']).as('card.create')
router.post('deck/:deckId/card/add', [CardsController, 'store']).as('card.store')
router.get('deck/:deckId/card/:id/show', [CardsController, 'show']).as('card.show')
router.get('deck/:deckId/card/:id/edit', [CardsController, 'edit']).as('card.edit')
router.put('deck/:deckId/card/:id/update', [CardsController, 'update']).as('card.update')
