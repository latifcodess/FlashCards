import vine from '@vinejs/vine'

const deckValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(2),
    description: vine.string().trim().minLength(10),
  })
)
export { deckValidator }