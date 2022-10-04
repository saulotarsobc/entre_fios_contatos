const img_product = document.querySelector('#img_product');

const imgs = [
    "url('../img/products/1.webp')",
    "url('../img/products/2.webp')",
    "url('../img/products/3.webp')",
    "url('../img/products/4.webp')",
];

let target = 1;
const max = imgs.length - 1;

function openGallery() {
    document.querySelector('#modal').style.display = "flex";
};

function closeGallery() {
    document.querySelector('#modal').style.display = "none";
};

function antImg() {
    if (target == 0) {
        target = max;
    } else {
        target--;
    }
    img_product.style.backgroundImage = imgs[target];
};

function nxtImg() {
    target++
    if (target > max) {
        target = 0;
    }
    img_product.style.backgroundImage = imgs[target];
};

// openGallery()