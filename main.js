const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const alerta = document.getElementById("btn-alert");
const btnborra = document.getElementById("btn-Borrar");

const llavesEncriptar = { e: 'enter', i: 'imes', a: 'ai', o: 'ober', u: 'ufat' };
const llavesDesencriptar = { enter: 'e', imes: 'i', ai: 'a', ober: 'o', ufat: 'u' };

// Cualquier caracter que no sea letra minúscula sin acento o espacio
const caracteresInvalidos = /[^a-z\s]/;

//FUNCION PARA CAMBIAR ENTRE LA IMAGEN Y EL TEXTAREA
function mostrarImagen()
{
    const inputText = document.getElementById("text-en").value;

    if(inputText === "")
    {
        document.getElementById("content-view2").style.display = "none";
        document.getElementById("content-viewT").style.display = "block";
    }
    else
    {
        document.getElementById("content-viewT").style.display = "none";
        document.getElementById("content-view2").style.display = "block";
    }
}

// MOSTRAR UNA ALERTA TEMPORAL (reinicia el temporizador si ya estaba visible)
// Aparece y desaparece con la transición de opacidad definida en style.css
const temporizadores = {};
function mostrarAlerta(id)
{
    const elemento = document.getElementById(id);
    clearTimeout(temporizadores[id]);

    if (elemento.style.display !== "block")
    {
        // Parte transparente; leer offsetWidth fuerza al navegador a aplicar ese estado
        // antes de quitar la clase, para que la transición se vea
        elemento.classList.add("desvanecer");
        elemento.style.display = "block";
        void elemento.offsetWidth;
    }
    elemento.classList.remove("desvanecer");

    temporizadores[id] = setTimeout(function() {
        elemento.classList.add("desvanecer");
        temporizadores[id] = setTimeout(function() {
            elemento.style.display = "none";
            elemento.classList.remove("desvanecer");
        }, 200);
    }, 1000);
}

//FUNCION PARA LIMPIAR LOS TEXT AREA
btnborra.addEventListener("click", limpiar);
function limpiar()
{
    document.getElementById("text-en").value = "";
    document.getElementById("text-right").value = "";
    btnborra.style.display = "none";
    mostrarImagen();
}

// VALIDAR CARACTERES
function validar(text)
{
    if (caracteresInvalidos.test(text))
    {
        document.getElementById("alert-wrap").style.display = "block";
        limpiar();
        alerta.focus();
        return false;
    }
    return true;
}

// APLICA LA TRANSFORMACION AL TEXTO DE ENTRADA Y MUESTRA EL RESULTADO
function procesar(transformar)
{
    // Las mayúsculas se convierten a minúsculas en lugar de marcarlas como error
    const text = document.getElementById("text-en").value.trimStart().toLowerCase();

    if(text === "")
    {
        mostrarAlerta("alert-text");
        return;
    }
    if(!validar(text))
    {
        return;
    }

    btnborra.style.display = "block";
    document.getElementById("text-right").value = transformar(text);
    mostrarImagen();
}

// FUNCION DE ENCRIPTAR
// Se reemplaza en una sola pasada para que el resultado de una llave no sea afectado por otra
btnEncriptar.addEventListener("click", function() {
    procesar(text => text.replace(/[aeiou]/g, letra => llavesEncriptar[letra]));
});

// FUNCION DE DESENCRIPTAR
btnDesencriptar.addEventListener("click", function() {
    procesar(text => text.replace(/enter|imes|ai|ober|ufat/g, llave => llavesDesencriptar[llave]));
});

// BOTON DE COPIAR
btnCopiar.addEventListener("click", copiar);
function copiar()
{
    const texto = document.getElementById("text-right").value;
    navigator.clipboard.writeText(texto).then(function() {
        mostrarAlerta("alert-copy");
    });
}

// DESAPARECER ALERTA DE ERROR
alerta.addEventListener("click", alertError);
function alertError()
{
   document.getElementById("alert-wrap").style.display = "none";
   document.getElementById("text-en").focus();
}
