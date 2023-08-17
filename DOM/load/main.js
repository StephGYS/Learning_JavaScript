const images = document.querySelectorAll("img");

const imagesArray = Array.from(images);

imagesArray.map((image, index) => image.addEventListener("load", 
    function() {
        console.log(`Image n${index + 1}: OK`);
}));