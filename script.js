function playMusic() {
    const audio = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');
    audio.play().then(() => {
        playButton.style.display = 'none'; // Hide the play button after audio starts playing
    }).catch(error => {
        console.log('Playback failed:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('playButton').click(); // Simulate click on play button to start audio on page load
});

// Prevent screenshot using print screen key
document.addEventListener('keyup', function(e) {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled on this webpage.');
    }
});

// Prevent screenshot using screen recording
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        alert('Screenshots are disabled on this webpage.');
    }
});
