document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('birthdaySong');
    audio.play().catch(error => {
        console.log('Playback failed:', error);
    });
});
