// Botón para cambiar tema
const botonTema = document.getElementById('botonTema');
const body = document.body;

botonTema.addEventListener('click', () => {
    body.classList.toggle('claro');
    body.classList.toggle('oscuro');
});

// Formulario de contacto
const form = document.getElementById('formContacto');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Los datos se han enviado a Marco Antonio Ortega Rosales');
    form.reset();
});
