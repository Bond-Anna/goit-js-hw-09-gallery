import { galleryEll, galleryItems, modalEll, modalImageEl } from './common';
import { onEscPress } from './close-modal';

let currentIndex;

galleryEll.addEventListener('click', onGalleryItemsClick);
function onGalleryItemsClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  modalEll.classList.add('is-open');
  modalImageEl.src = event.target.dataset.source;
  modalImageEl.alt = event.target.alt;

  window.addEventListener('keydown', onEscPress);
  currentIndex = Number(event.target.dataset.index);
  window.addEventListener('keydown', onArrowPress);
}

function onArrowPress(event) {
  if (event.code === 'ArrowRight') {
    onArrowRight();
  } else if (event.code === 'ArrowLeft') {
    onArrowLeft();
  }
}

function onArrowRight() {
  if (currentIndex + 1 > galleryItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  changeImg();
}

function onArrowLeft() {
  currentIndex -= 1;
  if (currentIndex - 1 < 0) {
    currentIndex = galleryItems.length - 1;
  }
  changeImg();
}
function changeImg() {
  modalImageEl.src = galleryItems[currentIndex].original;
  modalImageEl.alt = galleryItems[currentIndex].description;
}
