window.addEventListener('resize', function() {
    let canvas = document.getElementById('khanvas');
    // Asignar tamaño proporcional al canvas
    canvas.width = window.innerWidth * 0.3; // 80% del ancho de la ventana
    canvas.height = canvas.width*.6; // 60% del alto de la ventana
});

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && event.target === document.body) {
    event.preventDefault();
    event.stopPropagation();
  }
});

// Ejecutar al cargar la página para asignar tamaño inicial
window.dispatchEvent(new Event('resize'));
getElementById("khanvas").dispatchEvent(new Event('keydown'));