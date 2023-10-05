//Display name 
let typed = new Typed(".auto-type", {
    strings: ["Web-Developer", "Data Analyst"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

//Display dynamic picture
const images = [
    "assets/images/pic1.jpg",
    // "assets/images/pic2.jpg",
    "assets/images/pic3.jpg"
];

function loadImages() {
    const imageContainer = document.getElementById("imageContainer");

    images.forEach((imageUrl) => {
        const image = document.createElement("img");
        image.src = imageUrl;

        imageContainer.appendChild(image);
    });
}
loadImages();
