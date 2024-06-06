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

document.getElementById('join-now').addEventListener('click', function() {
    window.location.href = 'file:///C:/Users/Lenovo/Desktop/fitness/login/login.html'; // Replace with your folder path
});

document.getElementById('workouts-link').addEventListener('click', function(event) {
    event.preventDefault();
    const targetPosition = document.documentElement.scrollHeight * 0.49;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1300; // duration in milliseconds
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * percent);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
});

document.getElementById('blogs-link').addEventListener('click', function(event) {
    event.preventDefault();
    const targetPosition = document.documentElement.scrollHeight * 0.65;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1400; // duration in milliseconds
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percent = Math.min(progress / duration, 1);
        window.scrollTo(0, startPosition + distance * percent);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
});