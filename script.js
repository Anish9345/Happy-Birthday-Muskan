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
