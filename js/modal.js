(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

// const openModalButtons = document.querySelectorAll('.data-modal-open'),
//       modal = document.querySelector('.data-modal'),
//   closeModalButtons = document.querySelectorAll('.data-modal-close'),
//   closeModalAll = document.querySelectorAll('.backdrop');
      
//   openModalButtons.forEach(openModalButtons => {
//   openModalButtons.addEventListener('click', toggleModal)
// });

//   closeModalButtons.forEach(closeModalButtons => {
//   closeModalButtons.addEventListener('click', toggleModal)
//   });

//   closeModalAll.forEach(closeModalAll => {
//   closeModalAll.addEventListener('click', toggleModal)
// });

// function toggleModal() {
//     modal.classList.toggle("is-hidden");
//   }