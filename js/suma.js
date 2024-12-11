function mostrarFormSuma() {
    const formContainer = document.getElementById('formContainer');

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
            <button type="submit" class="btn btn-primary">Calcular Suma</button>
        </form>
    `;

    
    formContainer.style.display = 'block';

    document.getElementById('miFormulario').addEventListener('submit', mostrarResultadoSuma);
}

function mostrarResultadoSuma(event) {
    event.preventDefault(); 

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    const suma = valor1 + valor2;

    
    const tbody = document.getElementById('resultTable').querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${valor1}</td>
        <td>${valor2}</td>
        <td>${suma}</td>
    `;
    tbody.appendChild(newRow);

    Swal.fire({
        title: 'Resultado',
        html: `<p>La suma de  ${suma}</p>`,
        icon: 'info',
        confirmButtonText: 'Aceptar'
    });

   
    document.getElementById('miFormulario').reset();
}


mostrarFormSuma();
