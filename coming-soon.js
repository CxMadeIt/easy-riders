// Set the launch date (14 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 14);

function updateTimer() {
    const now = new Date();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update timer every second
setInterval(updateTimer, 1000);
updateTimer(); // Initial call

function notifyMe() {
    const email = document.getElementById('email-input').value;
    if (email) {
        alert('Thank you! We\'ll notify you when we launch. (Demo only - no email is actually stored)');
        document.getElementById('email-input').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);
    
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdown);
            document.querySelector(".countdown").innerHTML = "Website is Live!";
        }
    }, 1000);
}

// Audio Controls
document.addEventListener('DOMContentLoaded', function() {
    const audioBtn = document.getElementById('toggleAudio');
    const audio = document.getElementById('bgMusic');
    const audioIcon = audioBtn.querySelector('.audio-icon');
    let isPlaying = false;

    // Set initial volume
    audio.volume = 0.3; // 30% volume

    audioBtn.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            audioBtn.classList.remove('playing');
            audioIcon.textContent = '▶️';
        } else {
            audio.play();
            audioBtn.classList.add('playing');
            audioIcon.textContent = '⏸️';
        }
        isPlaying = !isPlaying;
    });

    // Auto-pause when tab/window is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden && isPlaying) {
            audio.pause();
            audioBtn.classList.remove('playing');
            audioIcon.textContent = '▶️';
            isPlaying = false;
        }
    });
});

// Start the countdown
updateCountdown();
