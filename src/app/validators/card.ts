import { AuthManager } from '@adonisjs/auth'
import vine from '@vinejs/vine'

// paramèetre exceptId flexible donc pas obligatoire (création: pas obligatoire, modification: obligatoire)
const cardValidator = (exceptId: number | null = null) => {
  return vine.compile(
    vine.object({
      
      question: vine.string().bail(true).unique(async (db, value) => {
        // cherche la question des cartes
        const query = db.from('cards').where('question', value)

        // si un id est fournis (modification) on ignore la carte en question pour eviter qu'elle s'auto bloque
        if (exceptId) {
          query.whereNot('id', exceptId)
        }

        // lance la requête et retourne true si aucun doublon est trouvé
        const match = await query.first()
        return !match
      }),

      answer: vine.string()
    })
  )
}

export { cardValidator }
