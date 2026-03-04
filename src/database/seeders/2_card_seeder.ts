import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Card from '#models/card'

export default class extends BaseSeeder {
  async run() {
    await Card.createMany([
      {
        id: 1,
        question: 'Quel est le mot clé pour joindre des données dynamiquement dans du HTML ?',
        answer: 'v-bind',
        deckId: 1,
      },
      {
        id: 2,
        question: 'Quelle directive permet d’afficher du texte dynamiquement dans le HTML ?',
        answer: 'v-text',
        deckId: 1,
      },
      {
        id: 3,
        question: 'Quelle directive permet d’afficher du HTML brut dynamiquement ?',
        answer: 'v-html',
        deckId: 1,
      },
      {
        id: 4,
        question: 'Quelle directive permet d’afficher un élément sous condition ?',
        answer: 'v-if',
        deckId: 1,
      },
      {
        id: 5,
        question: 'Quelle directive permet d’afficher un élément en boucle ?',
        answer: 'v-for',
        deckId: 1,
      },
      {
        id: 6,
        question: 'Quelle directive permet d’écouter un événement comme un clic ?',
        answer: 'v-on',
        deckId: 1,
      },
      {
        id: 7,
        question: 'Quel raccourci utilise-t-on pour v-on ?',
        answer: '@',
        deckId: 1,
      },
      {
        id: 8,
        question: 'Quel raccourci utilise-t-on pour v-bind ?',
        answer: ':',
        deckId: 1,
      },
      {
        id: 9,
        question: 'Quelle directive permet la liaison bidirectionnelle des données ?',
        answer: 'v-model',
        deckId: 1,
      },
      {
        id: 10,
        question: 'Quelle option est utilisée pour définir les données dans un composant Vue ?',
        answer: 'data',
        deckId: 1,
      },
      {
        id: 11,
        question: 'Quelle commande permet d’afficher toutes les données d’une collection MongoDB ?',
        answer: 'find()',
        deckId: 2,
      },
      {
        id: 12,
        question: 'Quelle commande permet d’insérer un seul document dans une collection ?',
        answer: 'insertOne()',
        deckId: 2,
      },
      {
        id: 13,
        question: 'Quelle commande permet d’insérer plusieurs documents en une fois ?',
        answer: 'insertMany()',
        deckId: 2,
      },
      {
        id: 14,
        question: 'Quelle commande permet de supprimer un seul document ?',
        answer: 'deleteOne()',
        deckId: 2,
      },
      {
        id: 15,
        question: 'Quelle commande permet de mettre à jour un seul document ?',
        answer: 'updateOne()',
        deckId: 2,
      },
      {
        id: 16,
        question: 'Quelle méthode permet de limiter le nombre de résultats retournés ?',
        answer: 'limit()',
        deckId: 2,
      },
      {
        id: 17,
        question: 'Quelle méthode permet de trier les résultats ?',
        answer: 'sort()',
        deckId: 2,
      },
      {
        id: 18,
        question: 'Quelle commande permet de compter le nombre de documents dans une collection ?',
        answer: 'countDocuments()',
        deckId: 2,
      },
      {
        id: 19,
        question: 'Quelle commande permet de rechercher un document par son identifiant unique ?',
        answer: 'findById()',
        deckId: 2,
      },
      {
        id: 20,
        question: 'Quel type spécial MongoDB est utilisé pour les identifiants uniques ?',
        answer: 'ObjectId',
        deckId: 2,
      },
    ])
  }
}
