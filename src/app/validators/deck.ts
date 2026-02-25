import vine from '@vinejs/vine'

const deckValidator = vine.compile(
  vine.object({
    // la taille minimal pour le champ title est de 2 caractères
    title: vine.string().trim().minLength(2),

    // la taille minimal pour le champ description est de 10 caractères
    description: vine.string().trim().minLength(10),
  })
)
export { deckValidator }