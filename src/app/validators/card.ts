import vine from '@vinejs/vine'

const cardValidator = vine.compile(
  vine.object({
    // la taille minimal pour le champ question est de 5 caractères
    question: vine.string().trim().minLength(5),

    // la taille minimal pour le champ answer est de 1 caractères
    answer: vine.string().trim().minLength(1),
  })
)
export { cardValidator }