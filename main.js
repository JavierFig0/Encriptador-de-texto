
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const alerta = document.getElementById("btn-alert");
const btnborra = document.getElementById("btn-Borrar");

//FUNCION PARA CAMBIAR ENTRE LA IMAGEN Y EL TEXTAREA
function mostrarImagen()
{
    var inputText = document.getElementById("text-en").value;

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

//FUNCION PARA LIMPIAR LOS TEXT AREA
btnborra.addEventListener("click", limpiar);
btnborra.addEventListener("click", mostrarImagen);
function limpiar() 
{
    document.getElementById("text-en").value = "";
    document.getElementById("text-right").value = "";
    document.getElementById("btn-Borrar").style.display = "none";
    mostrarImagen();
}

// FUNCION DE ENCRIPTAR
btnEncriptar.addEventListener("click", Encriptar);
function Encriptar()
{
    var Text = document.getElementById("text-en").value.trimStart();

    if(Text === "")
    {
        document.getElementById("alert-text").style.display = "block";
      setTimeout(function() { $('.alert-text').fadeOut('fast'); }, 1000);
    } 
    else 
    {
        document.getElementById("btn-Borrar").style.display = "block";

        Text = Text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
        document.getElementById("text-right").value = Text;
        mostrarImagen();
    }
}

// FUNCION DE DESENCRIPTAR
btnDesencriptar.addEventListener("click", Desencriptar);
function Desencriptar()
{
    var Text = document.getElementById("text-en").value.trimStart();

    if(Text === "")
    {
        document.getElementById("alert-text").style.display = "block";
      setTimeout(function() { $('.alert-text').fadeOut('fast'); }, 1000);
    } 
    else 
    {
        document.getElementById("btn-Borrar").style.display = "block";

        Text = Text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
        document.getElementById("text-right").value = Text;
        mostrarImagen();
    }
}

// BOTON DE COPIAR
btnCopiar.addEventListener("click", copiar);
function copiar() 
{
    let copiar = document.getElementById("text-right").value;
    navigator.clipboard.writeText(copiar);

    document.getElementById("alert-copy").style.display = "block";
    setTimeout(function() { $('.alert-copy').fadeOut('fast'); }, 1000);

}  

// DESAPARECER ALERTA DE ERROR
alerta.addEventListener("click", alertError);
function alertError()
{
   document.getElementById("alert-wrap").style.display = "none";
}

// VALIDAR CARACTERES
btnEncriptar.addEventListener("click", validar);
btnDesencriptar.addEventListener("click", validar);
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;

function validar() 
{
    let inputText = document.getElementById("text-en").value;
    if (inputText.match(letras) != null) 
    {
        document.getElementById("alert-wrap").style.display = "block";
        mostrarImagen();
        limpiar();
    }
}
