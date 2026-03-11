let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

function openLightbox(img){
lightbox.style.display="flex";
lightboxImg.src = img.src;
currentIndex = [...images].indexOf(img);
}

function closeLightbox(){
lightbox.style.display="none";
}

function changeImage(step){
currentIndex += step;

if(currentIndex < 0){
currentIndex = images.length -1;
}

if(currentIndex >= images.length){
currentIndex = 0;
}

lightboxImg.src = images[currentIndex].src;
}