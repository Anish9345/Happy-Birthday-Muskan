function playMusic() {
    const audio = document.getElementById('birthdaySong');
    audio.play().catch(error => {
        console.log('Playback failed:', error);
    });
}

function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const passwordError = document.getElementById('passwordError');
    const mainContent = document.getElementById('mainContent');
    const passwordPrompt = document.getElementById('passwordPrompt');

    if (passwordInput === 'Anish') {
        passwordPrompt.style.display = 'none';
        mainContent.style.display = 'block';
        playMusic(); // Play the music once the correct password is entered
    } else {
        passwordError.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.overflowY = 'auto'; // Ensure the body allows vertical scrolling
});
