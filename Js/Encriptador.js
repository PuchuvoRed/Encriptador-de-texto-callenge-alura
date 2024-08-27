
document.addEventListener("DOMContentLoaded", () => {
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const txtEncriptar = document.querySelector(".encriptar");
    const aviso = document.querySelector(".texto-aviso");
    const respuesta = document.querySelector(".respuesta");
    const btnCopiar = document.querySelector(".btn-copiar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const btnLimpiar = document.querySelector(".btn-limpiar"); // Selecciona el botón de limpiar

    // Verificar si los elementos están correctamente seleccionados
    if (!respuesta) {
        console.error("Elemento con la clase 'respuesta' no encontrado.");
        return;
    }
    if (!btnCopiar) {
        console.error("Elemento con la clase 'btn-copiar' no encontrado.");
        return;
    }
    if (!btnDesencriptar) {
        console.error("Elemento con la clase 'btn-desencriptar' no encontrado.");
        return;
    }
    if (!btnLimpiar) {
        console.error("Elemento con la clase 'btn-limpiar' no encontrado.");
        return;
    }

    //-------Botón Encriptar-------//
    btnEncriptar.addEventListener("click", e => {
        e.preventDefault();

        let texto = txtEncriptar.value;
        let textoNormalizado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]><:"`;,\u0300-\u036f']/g, "");

        // Inicializamos el aviso
        aviso.removeAttribute("style");
        aviso.textContent = "";

        if (texto === "") {
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "El campo de texto no debe estar vacío";
        } else if (texto !== textoNormalizado) {
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "No debe tener acentos y caracteres especiales";
        } else if (texto !== texto.toLowerCase()) {
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "El texto debe ser todo en minúscula";
        } else {
            // Encriptar el texto
            texto = texto.replace(/e/g, "enter");
            texto = texto.replace(/i/g, "imes");
            texto = texto.replace(/a/g, "ai");
            texto = texto.replace(/o/g, "ober");
            texto = texto.replace(/u/g, "ufat");

            // Mostrar el texto encriptado en el elemento `respuesta`
            respuesta.value = texto;
            btnCopiar.style.visibility = "visible";
            
            // Mostrar mensaje de éxito si todo está bien
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "Texto encriptado correctamente";
        }

        // Limpiar el aviso después de 1500ms
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "";
        }, 1500);
    });

    //-------Botón Desencriptar-------//
    btnDesencriptar.addEventListener("click", e => {
        e.preventDefault();

        let texto = txtEncriptar.value;
        let textoNormalizado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]><:"`;,\u0300-\u036f']/g, "");

        // Inicializamos el aviso
        aviso.removeAttribute("style");
        aviso.textContent = "";

        if (texto === "") {
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "El campo de texto no debe estar vacío";
        } else if (texto !== textoNormalizado) {
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "No debe tener acentos y caracteres especiales";
        } else if (texto !== texto.toLowerCase()) {
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "El texto debe ser todo en minúscula";
        } else {
            // Desencriptar el texto
            texto = texto.replace(/enter/g, "e");
            texto = texto.replace(/imes/g, "i");
            texto = texto.replace(/ai/g, "a");
            texto = texto.replace(/ober/g, "o");
            texto = texto.replace(/ufat/g, "u");

            // Mostrar el texto desencriptado en el elemento `respuesta`
            respuesta.value = texto;
            btnCopiar.style.visibility = "visible";
            
            // Mostrar mensaje de éxito si todo está bien
            aviso.style.background = "#0A3871";
            aviso.style.color = "#FFFF";
            aviso.style.fontWeight = "800";
            aviso.textContent = "Texto desencriptado correctamente";
        }

        // Limpiar el aviso después de 1500ms
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "";
        }, 1500);
    });

    //-------Botón de Copiar-------//
    btnCopiar.addEventListener("click", e => {
        e.preventDefault();
        // Usar la API moderna del portapapeles
        navigator.clipboard.writeText(respuesta.value)
            .then(() => {
                aviso.style.background = "#0A3871";
                aviso.style.color = "#FFFF";
                aviso.style.fontWeight = "800";
                aviso.textContent = "Texto copiado al portapapeles";
                
                // Limpiar el aviso después de 1500ms
                setTimeout(() => {
                    aviso.removeAttribute("style");
                    aviso.textContent = "";
                }, 1500);
            })
            .catch(err => {
                console.error('Error al copiar al portapapeles: ', err);
            });
    });

    //-------Botón Limpiar-------//
    btnLimpiar.addEventListener("click", e => {
        e.preventDefault();
        // Limpiar el campo de texto encriptado
        txtEncriptar.value = "";
        // Limpiar el campo de texto desencriptado
        respuesta.value = "";
        // Ocultar el botón de copiar
        btnCopiar.style.visibility = "hidden";
        // Inicializar el aviso
        aviso.removeAttribute("style");
        aviso.textContent = "Campos limpiados";
        
        // Limpiar el aviso después de 1500ms
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "";
        }, 1500);
    });
});