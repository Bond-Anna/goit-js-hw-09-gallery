import { galleryItems, galleryEll } from './common';

const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);

function creatGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }, index) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            data-index="${index}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}
console.log(galleryItemsMarkup);
galleryEll.insertAdjacentHTML('beforeend', galleryItemsMarkup);
