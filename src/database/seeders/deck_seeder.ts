import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Deck from '#models/deck'

export default class extends BaseSeeder {
  async run() {
    await Deck.createMany([
      {id: 1, title: 'Vue.js', description: 'Framework Vue.js avec mr Charmier'},
      {id: 2, title: 'MongoDB', description: 'Base de données NoSQL avec mr Meylan'}
    ])
  }
}