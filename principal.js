const button = document.getElementById('btn');
const image = document.getElementById('imgd');

// Agregamos el evento de clic al botón
button.addEventListener('click', () => {
    // Añadir la clase para animar
    image.classList.add('animatedory');
    
    // Eliminar la clase después de la animación (1 segundo en este caso)
    setTimeout(() => {
        image.classList.remove('animatedory');
    }, 1000); // Duración de la animación en milisegundos
});