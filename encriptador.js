const entrada = document.querySelector('.contenido__entrada__cuadro');
const mensaje = document.querySelector('.contenido__resultado__cuadro');
const tituloMensaje = document.querySelector('.contenido__resultado__mensaje__titulo');
const textoMensaje = document.querySelector('.contenido__resultado__mensaje__texto');
const btnCopiar = document.querySelector('.contenido__resultado__botones');


function reiniciar(){
  entrada.value = '';
  mensaje.value = '';
  mensaje.style.backgroundImage = 'url("./assets/muneco.png")';
  tituloMensaje.style.display = 'flex';
  textoMensaje.style.display = 'flex';
  btnCopiar.style.display = 'none';
}

function btnEncriptar(){
  const textoEncriptado = encriptar(entrada.value);

  mensaje.style.backgroundImage = 'none';
  tituloMensaje.style.display = 'none';
  textoMensaje.style.display = 'none';
  console.log(entrada.value);
  if (validaEntrada(entrada.value)){
    mensaje.value = textoEncriptado;
    btnCopiar.style.display = 'flex';
  } else {
    mensaje.value = "Sólo se permite letras minúsculas y sin acento";
    mensaje.style.textTransform = 'inherit';
  };


}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar(entrada.value);
  mensaje.style.backgroundImage = 'none';
  tituloMensaje.style.display = 'none';
  textoMensaje.style.display = 'none';
  if (validaEntrada(entrada.value)){
    mensaje.value = textoDesencriptado;
    btnCopiar.style.display = 'flex';
  } else {
    mensaje.value = "Sólo se permite letras minúsculas y sin acento";
    mensaje.style.textTransform = 'inherit';
  }

}

function encriptar(stringEncriptado) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptado = stringEncriptado.toLowerCase()

  for(let i=0; i < matrizCodigo.length; i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
    }
  }
  return stringEncriptado
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado= stringDesencriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
      if(stringDesencriptado.includes(matrizCodigo[i][1])){
        stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
      }
    }
    return stringDesencriptado
}

function copiarTexto(){
  mensaje.select();
  document.execCommand("copy");
}

function validaEntrada(input){
  const regex = /^[a-z\s]+$/;
  return regex.test(input);
}