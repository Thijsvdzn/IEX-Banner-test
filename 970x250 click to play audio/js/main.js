var play = document.getElementById('play');
var pause = document.getElementById('pause');
var ad = document.getElementById('video');
var state = "paused";

ad.onclick = function () {
    if (state === "paused") {
        play.style.display = "none";
        pause.style.display = "block";
        state = "playing";
    } else {
        play.style.display = "block";
        pause.style.display = "none";
        state = "paused";
    }
};