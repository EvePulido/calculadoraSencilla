let digitos = document.querySelector('.pantalla');
let botones = document.querySelectorAll('.boton'); //Selecciona todos los elementos con la clase "boton"

botones.forEach(boton => { //Función a realizar para cada elemento de la variable botones
    boton.addEventListener('click', () => {
        const botonClick = boton.textContent;

        if (botonClick === "ON / CE" || digitos.textContent === "Error") {
            digitos.textContent = "0";
            return;
        }

        if (botonClick === "C") {
            if (digitos.textContent.length === 1) {
                digitos.textContent = "0";
                return;
            } else {
                digitos.textContent = digitos.textContent.slice(0, -1); //Elimina un digito de la string, regresa el resultante
                return;
            }
        }

        if (botonClick === "=") {
            try {
                let resultado = eval(digitos.textContent);
                let resultadoString = resultado.toString();
                if (resultadoString.length > 10) {
                    digitos.textContent = resultadoString.slice(0, 10);
                } else {
                    digitos.textContent = resultadoString;
                }

            } catch {
                digitos.textContent = "Error";
            }
            return;
            return;
        }

        if (digitos.textContent === "0") {
            digitos.textContent = botonClick;
        } else {
            digitos.textContent += botonClick;
            return;
        }
    })
})
