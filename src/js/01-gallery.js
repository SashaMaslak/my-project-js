// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Change code below this line

import { galleryItems } from './gallery-items.js';

const galeryContainer = document.querySelector('.gallery');
const imagesMarkUp = createGalleryMarkup(galleryItems);
galeryContainer.insertAdjacentHTML('beforeend', imagesMarkUp);


new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250'});

function createGalleryMarkup(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
         </a>
      `;
      })
      .join('');
};
