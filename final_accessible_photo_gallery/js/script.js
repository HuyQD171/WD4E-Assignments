function upDate(previewPic) {
    console.log("Event triggered: update preview");

    let imageDiv = document.getElementById("image");
    let image = previewPic.querySelector("img");

    console.log("Alt text: " + image.alt);
    console.log("Image source: " + image.src);

    imageDiv.innerHTML = image.alt;
    imageDiv.style.backgroundImage = "url('" + image.src + "')";
}

function undo() {
    console.log("Event triggered: undo preview");

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}

function addTabFocus() {
    console.log("Page loaded. Adding tabindex and event listeners.");

    let figures = document.querySelectorAll(".preview");

    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");

        figures[i].addEventListener("mouseover", function () {
            upDate(this);
        });

        figures[i].addEventListener("mouseleave", function () {
            undo();
        });

        figures[i].addEventListener("focus", function () {
            upDate(this);
        });

        figures[i].addEventListener("blur", function () {
            undo();
        });
    }
}
