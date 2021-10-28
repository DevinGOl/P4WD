

window.onload = fadeIn1;

function fadeIn1() {
    var fade = document.getElementById("WasE3");
    var opacity = 0;
    var intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

UIkit.scrollspy(element, options);
