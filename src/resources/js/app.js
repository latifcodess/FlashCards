console.log('Hello World')

window.openModal = function () {
  document.getElementById("deleteModal").classList.add("active");
};

window.closeModal = function () {
  document.getElementById("deleteModal").classList.remove("active");
};

document.addEventListener("click", function (e) {
  const modal = document.getElementById("deleteModal");
  if (e.target === modal) {
    closeModal();
  }
});