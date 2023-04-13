// variables

const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const texto = document.querySelector("#inputEncriptar");

const mostrarTexto = document.createElement("textarea");
mostrarTexto.readOnly = true;

const contenedorEncriptado = document.querySelector(".contenedorEncriptado");

let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
let mayusculas = /[A-Z]/g;

btnEncriptar.addEventListener("click", () => {
  if (texto.value === "") {
    alert("no debe haber campos vacios");
    return;
  }
  if (validarTexto(texto.value)) {
    alert("no debe contener caracteres ni mayusculas");
    return;
  }
  encriptarTexto(texto.value.trim());
  texto.value = "";
});

btnDesencriptar.addEventListener("click", () => {
  if (texto.value === "") {
    alert("no debe haber campos vacios");
    return;
  }
  if (validarTexto(texto.value)) {
    alert("no debe contener caracteres ni mayusculas");
    return;
  }
  desencriptarTexto(texto.value.trim());
  texto.value = "";
});

btnCopiar.addEventListener("click", copiar);

function encriptarTexto(texto) {
  let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  mostrarTexto.textContent = textoCifrado;
  mostrarTexto.classList.add("headingEncriptado");
  contenedorEncriptado.insertBefore(mostrarTexto, contenedorEncriptado.children[3]);
  contenedorEncriptado.children[1].classList.add("activa");
  contenedorEncriptado.children[2].classList.add("activa");
  contenedorEncriptado.children[0].classList.add("activa");
}

function desencriptarTexto(texto) {
  var textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  mostrarTexto.innerHTML = textoDesencriptado;
  contenedorEncriptado.insertBefore(mostrarTexto, contenedorEncriptado.children[3]);
  mostrarTexto.classList.add("headingEncriptado");
  contenedorEncriptado.children[1].classList.add("activa");
  contenedorEncriptado.children[2].classList.add("activa");
  contenedorEncriptado.children[0].classList.add("activa");

  console.log(textoDesencriptado)
  console.log(mostrarTexto)
}

function copiar() {
  let texto = document.querySelector('.headingEncriptado');
  texto.select();
  document.execCommand("copy");
  alert("se copio");
}

function validarTexto(texto) {
  let resultado = mayusculas.test(texto);
  resultado = caracteres.test(texto);
  return resultado;
}
