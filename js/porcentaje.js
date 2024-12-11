function mostrarFormporce() {
    const formContainer = document.getElementById('formContainer');

    // Crear el formulario
    formContainer.innerHTML = `
        <form id="miFormulario">
            <div class="form-group">
                <label for="valor1">Primer Valor:</label>
                <input type="number" class="form-control" id="valor1" required>
            </div>
            <div class="form-group">
                <label for="valor2">Segundo Valor:</label>
                <input type="number" class="form-control" id="valor2" required>
            </div>
            <div class="form-group">
                <label for="valor3">Tercer Valor:</label>
                <input type="number" class="form-control" id="valor3" required>
            </div>
            <button type="submit" class="btn btn-primary">Calcular Porcentajes</button>
        </form>
    `;

    // Mostrar el formulario
    formContainer.style.display = 'block';

    // Añadir el evento submit
    document.getElementById('miFormulario').addEventListener('submit', mostrarAlerta);
}

function mostrarAlerta(event) {
    event.preventDefault(); // Evita el envío del formulario

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const valor3 = parseFloat(document.getElementById('valor3').value);

    // Calcular los porcentajes
    const porcentaje1 = calcularPorcentaje(valor1, 0.30);
    const porcentaje2 = calcularPorcentaje(valor2, 0.30);
    const porcentaje3 = calcularPorcentaje(valor3, 0.40);

    // Muestra una alerta con SweetAlert2
    Swal.fire({
        title: 'Resultados',
        html: `
            <p>El 30% de ${valor1} es: ${porcentaje1}</p>
            <p>El 30% de ${valor2} es: ${porcentaje2}</p>
            <p>El 40% de ${valor3} es: ${porcentaje3}</p>
        `,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });

    // Limpiar el formulario
    document.getElementById('miFormulario').reset();
}

// Función para calcular el porcentaje
function calcularPorcentaje(valor, porcentaje) {
    return valor * porcentaje;
}
