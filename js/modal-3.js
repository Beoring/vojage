(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-3]'),
    closeModalBtn: document.querySelector('[data-modal-close-3]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();