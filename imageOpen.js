function openImg(imgName, orientation) {
    document.getElementById("image").src = imgName;
    document.getElementById("openDialog").showModal();

    if (orientation == "height") {
        document.getElementById("image").style.width = "auto";
        document.getElementById("image").style.height = "100%";
    } else {
        document.getElementById("image").style.width = "100%";
        document.getElementById("image").style.height = "auto";
    }
}

function closeImg() {
    document.getElementById("openDialog").close();
}

document.getElementById("openDialog").addEventListener("click", closeImg);