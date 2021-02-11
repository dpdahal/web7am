var startIndex = 0;

function AutoImageSlider() {
    var imageIndex = document.getElementsByClassName("imageBox");
    for (var x = 0; x < imageIndex.length; x++) {
        imageIndex[x].style.display = 'none';
    }
    startIndex++;
    if (startIndex > imageIndex.length) {
        startIndex = 1;
    }
    imageIndex[startIndex - 1].style.display = 'block';
    setTimeout(AutoImageSlider, 2000);
}

AutoImageSlider();




