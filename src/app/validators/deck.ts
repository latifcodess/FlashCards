import vine from '@vinejs/vine'

// paramèetre exceptId flexible donc pas obligatoire (création: pas obligatoire, modification: obligatoire)
const deckValidator = (exceptId: number | null = null) => {
  return vine.compile(
    vine.object({
      
      title: vine.string().unique(async (db, value) => {
        // recherche le titre des decks
        const query = db.from('decks').where('title', value)

        // si un id est fournis (modification) on ignore le deck en question pour eviter qu'il s'auto bloque
        if (exceptId) {
          query.whereNot('id', exceptId)
        }

        // lance la requête et retourne true si aucun doublon est trouvé
        const match = await query.first()

        return !match
      }),

      // la taille minimal pour le champ description est de 10 caractères
      description: vine.string().trim().minLength(10),
    })
  )
}

export { deckValidator }
