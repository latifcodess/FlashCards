console.log('Hello World')

window.openModal = function () {
  // ajoute la class active pour afficher la fenetre de confirmation de suppression
  document.getElementById("deleteModal").classList.add("active");
};

window.closeModal = function () {
  // retire la class active pour fermer la fenetre
  document.getElementById("deleteModal").classList.remove("active");
};

document.addEventListener("click", function (e) {
  const modal = document.getElementById("deleteModal");
  // si l'utilisateur clique en dehors de la fenetre : la fenetre se ferme
  if (e.target === modal) {
    closeModal();
  }
});