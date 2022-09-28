function generateDog() {
    var image = document.createElement("img");
    var div = document.querySelector(".dog-images");
    image.src = "https://placedog.net/640/480?random"
    div.appendChild(image);
}