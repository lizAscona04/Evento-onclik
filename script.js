document.getElementById('login-btn').addEventListener('click', function() {
    if (this.textContent === 'Iniciar sesión') {
        this.textContent = 'Cerrar sesión';
    } else {
        this.textContent = 'Iniciar sesión';
    }
});

document.getElementById('add-definition-btn').addEventListener('click', function() {
    this.style.display = 'none';
});

document.querySelectorAll('.like-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        let currentLikes = parseInt(button.textContent.split(' ')[0]);
        currentLikes += 1;
        button.textContent = currentLikes + ' me gusta';
        alert('Te gustó la definición: ' + button.closest('.definition').querySelector('h2').textContent);
    });
});
