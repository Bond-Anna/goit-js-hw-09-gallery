import { closeBtn, overlay, modalEll, modalImageEl } from './common';

closeBtn.addEventListener('click', onCloseBtnClick);
overlay.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick(event) {
  modalEll.classList.remove('is-open');
  modalImageEl.src = '';
  modalImageEl.alt = '';
}

export function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseBtnClick();
  }
}
