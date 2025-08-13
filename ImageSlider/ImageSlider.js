const images=[
    "C:/Orbus/ImageSlider/Images/flowers.jpg",
    "C:/Orbus/ImageSlider/Images/lily.jpg",
    "C:/Orbus/ImageSlider/Images/lotus.jpg",
    "C:/Orbus/ImageSlider/Images/sunflowers.jpg",
    "C:/Orbus/ImageSlider/Images/tulip.jpg",
    "C:/Orbus/ImageSlider/Images/white sunflower.jpg",
];

let currentIndex = 0;

function showImage(index){
    document.getElementById("slider").src = images[index];

}
function slide_left(){
    currentIndex = (currentIndex+1) % images.length;
    showImage(currentIndex);
}

function slide_right(){
    currentIndex = (currentIndex-1+images.length) % images.length;
    showImage(currentIndex);
}
