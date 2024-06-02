document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 0); // Adjust time as needed
});
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("workout-slider");

    function autoSlide() {
        // Implement auto slide if needed
    }

    setInterval(autoSlide, 3000);
});
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("promo-video");
    var playButton = document.querySelector(".play-button");

    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.style.display = "none";
        } else {
            video.pause();
            playButton.style.display = "block";
        }
    }

    playButton.addEventListener("click", togglePlay);
    video.addEventListener("play", function() {
        playButton.style.display = "none";
    });
    video.addEventListener("pause", function() {
        playButton.style.display = "block";
    });
});


