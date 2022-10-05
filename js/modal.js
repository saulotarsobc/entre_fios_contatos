const img_product = document.querySelector('#img_product');

let target = 0;
let max;
let imgs;

(async () => {
    imgs = await fetch('../img/products/imgs.json').then((result) => { return result.json(); });
    max = imgs.length;
    img_product.src = imgs[target].src;
    img_product.alt = imgs[target].alt;
})();


function openGallery() {
    target = 0;
    img_product.alt = imgs[target].src;
    document.querySelector('#modal').style.display = "flex";
};

function closeGallery() {
    document.querySelector('#modal').style.display = "none";
};


function nxtImg() {
    target++;
    if (target == max) {
        target = 0;
    }
    img_product.src = imgs[target].src;
    img_product.alt = imgs[target].alt;
};

function antImg() {
    target--;
    if (target < 0) {
        target = max - 1;
    }
    img_product.src = imgs[target].src;
    img_product.alt = imgs[target].alt;
};
