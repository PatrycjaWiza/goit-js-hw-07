import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
// evt delegation
gallery.addEventListener("click", selectImg);
function selectImg(e) {
  e.preventDefault();
  //   if (e.target.nodeName !== "A") {
  //     return;
  //   }
  const selectedImg = e.target.dataset.source;
  const output = e.target;
  output.src = selectedImg;
  const instance = basicLightbox.create(output);

  //   output.src = selectedImg;
  //   const instance = basicLightbox.create(output);
  instance.show();
}

// rendering gallery
createGallery();
function createGallery() {
  const imgs = [];
  galleryItems.forEach((e) => {
    const { preview, original, description } = e;
    const item = document.createElement("a");
    item.classList.add("gallery__link");
    item.href = `${original}`;
    imgs.push(item);
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = `${preview}`;
    img.dataset.source = `${original}`;
    img.alt = `${description}`;
    item.append(img);
  });
  gallery.append(...imgs);
}
