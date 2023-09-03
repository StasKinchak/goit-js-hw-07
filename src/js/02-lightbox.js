import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector("ul");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handlePhoto);

function createMarkup(arr) {
    return arr
        .map(({ previev, original, description }) => {
            return `<li class="gallery_item" id="previev">
            <a href="${original}" class="gallery_link">
            <img src="${previev}" data-source="${original}" alt="${description}" class="gallery_image"/>
            </a>
            </li>`;
        })
        .join("");
}

function handlePhoto(event) {
    if (event.target === event.currentTarget) {
        return;
    }

    event.preventDefault();
    
    const modal = basicLightbox.create(
        `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);
    
    modal.show();
    
}
console.log(galleryItems);
