const image = document.getElementById('image');
const cropper = new Cropper(image);

/* Rotates the Canvas Anti-Clockwise */
function rotateImageACW() {
    cropper.rotate(-45);
}

/* Rotates the Canvas Clockwise */
function rotateImageCW() {
    cropper.rotate(45);
}

function flipImageX() {
    cropper.scale(-1, 1);
}

function flipImageY() {
    cropper.scale(1, -1);
}

function resetImage() {
    cropper.reset();
}

/* Get Image Data and shows it in a <div> */
function getImageData() {
    const data = cropper.getImageData();
    document.getElementById("showData").innerHTML = JSON.stringify(data);
}

/* Crops Image */
function getCroppedImage() {
    const canvas = cropper.getCroppedCanvas();
    //canvas to blob
    canvas.toBlob(function (blob) {
        let newImg = document.createElement('img');
        newImg.classList.add('m-1');
        url = URL.createObjectURL(blob);
        newImg.onload = function () {
            URL.revokeObjectURL(url);
        };
        newImg.src = url;

        // show it in the DOM
        let croppedDiv = document.getElementById('cropped');
        croppedDiv.appendChild(newImg);

        convertBlobToImage(blob);
    }, 'image/jpeg', 0.7);
}

/* provides downloadable Format */
function convertBlobToImage(blob) {
    // convert blob to image and provide download
    let link = document.createElement('a');
    link.download = 'Cropped_Image';
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
}




