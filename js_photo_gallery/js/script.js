function upDate(previewPic) {
    console.log("Mouse over image");
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}
