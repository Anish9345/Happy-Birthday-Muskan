function playMusic() {
    const audio = document.getElementById('birthdaySong');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
}

window.addEventListener('load', playMusic);
