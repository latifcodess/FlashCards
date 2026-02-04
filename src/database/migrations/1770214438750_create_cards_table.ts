import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('question')
      table.string('response')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table
        .integer('deck_id') // Clé étrangère
        .unsigned() // La clé ne doit pas être négative
        .references('id')
        .inTable('decks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}