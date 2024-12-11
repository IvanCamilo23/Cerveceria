function mostrarFormulario() {
    const formContainer = document.getElementById('formContainer');

    // Crear el formulario
    formContainer.innerHTML = `
        <form id="miFormulario" onsubmit="return mostrarAlerta();">
            <div class="form-group">
                <label for="fecha">Fecha:</label>
                <input type="date" class="form-control" id="fecha" required>
            </div>
            <div class="form-group">
                <label for="tienda">Tienda:</label>
                <input type="text" class="form-control" id="tienda" value="Surtilicores Wilches" readonly>
            </div>
            <div class="form-group">
                <label for="ciudad">Ciudad:</label>
                <input type="text" class="form-control" id="ciudad" required>
            </div>
            <div class="form-group">
                <label for="tipoBebida">Tipo de Bebida:</label>
                <input type="text" class="form-control" id="tipoBebida" required>
            </div>
            <div class="form-group">
                <label for="nombre">A nombre de:</label>
                <input type="text" class="form-control" id="nombre" required>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    `;

    // Mostrar el formulario
    formContainer.style.display = 'block';
}

function mostrarAlerta() {
    const fecha = document.getElementById('fecha').value;
    const tienda = document.getElementById('tienda').value;
    const ciudad = document.getElementById('ciudad').value;
    const tipoBebida = document.getElementById('tipoBebida').value;
    const nombre = document.getElementById('nombre').value;

    // Agregar una nueva fila a la tabla
    const tablaRegistros = document.getElementById('tablaRegistros').getElementsByTagName('tbody')[0];
    const nuevaFila = tablaRegistros.insertRow();
    
    nuevaFila.innerHTML = `
        <td>${fecha}</td>
        <td>${tienda}</td>
        <td>${ciudad}</td>
        <td>${tipoBebida}</td>
        <td>${nombre}</td>
    `;

    // Muestra una alerta con SweetAlert2
    Swal.fire({
        title: 'Registro Agregado',
        text: 'Los detalles han sido agregados a la tabla.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    return false; // Evita que el formulario se envíe
}
