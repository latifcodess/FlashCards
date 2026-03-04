console.log('Hello World')

window.openModal = function () {
  // ajoute la class active pour afficher la fenetre de confirmation de suppression
  document.getElementById('deleteModal').classList.add('active')
}

window.closeModal = function () {
  // retire la class active pour fermer la fenetre
  document.getElementById('deleteModal').classList.remove('active')
}

document.addEventListener('click', function (e) {
  const modal = document.getElementById('deleteModal')
  // si l'utilisateur clique en dehors de la fenetre : la fenetre se ferme
  if (e.target === modal) {
    closeModal()
  }
})

document.addEventListener('DOMContentLoaded', () => {
  // récupère les id et les class du DOM
  const inputQ = document.getElementById('question')
  const inputR = document.getElementById('answer')
  const previewQ = document.getElementById('preview-q')
  const previewR = document.getElementById('preview-r')
  const card = document.querySelector('.flip-card')
  const answerButtons = document.querySelector('.controls-area')

  // snchronisation de la Question
  inputQ.addEventListener('input', (e) => {
    // affiche le texte ou le placeholder
    previewQ.innerText = e.target.value || 'Votre question apparaîtra ici...'

    // force la carte sur recto pour voir ce qu'on écrit
    card.classList.remove('flipped')
  })

  // synchronisation de la Réponse
  inputR.addEventListener('input', (e) => {
    // affiche le texte entré par l'utilisateur ou le placeholder
    previewR.innerText = e.target.value || 'Votre réponse apparaîtra ici...'

    // force la carte sur verso pour voir ce qu'on écrit
    card.classList.add('flipped')
    answerButtons.classList.add('active')
  })
})