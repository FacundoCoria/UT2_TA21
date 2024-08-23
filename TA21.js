const campoTexto = document.getElementById('campoTexto');

        // Cambiar el borde a un color más oscuro al enfocar
        campoTexto.addEventListener('focus', function() {
            campoTexto.style.borderColor = '#333';
        });

        // Restaurar el borde original al perder el foco
        campoTexto.addEventListener('blur', function() {
            campoTexto.style.borderColor = '#ccc';
        });