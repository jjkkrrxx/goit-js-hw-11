import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createGallery(images) {
  const galleryContainer = document.querySelector('.gallery');

  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="image-info">
        <span>👍 ${image.likes}</span>
        <span>👁️ ${image.views}</span>
        <span>💬 ${image.comments}</span>
        <span>📥 ${image.downloads}</span>
      </div>
    </li>
  `
    )
    .join('');

  galleryContainer.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('show');
}

export function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.remove('show');
}