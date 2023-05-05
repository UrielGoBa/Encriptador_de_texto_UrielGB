/*Funcion para encriptar*/

function encriptar(){
    var textoIngresado = document.querySelector('#ingreseTxt').value;
    document.querySelector('#lateral1').style.display = 'none';
    document.querySelector('#lateral2').style.display = 'flex';
    var largoDelTexto = textoIngresado.length;
    var textoAuxiliar = [];
    for (var i = 0; i < largoDelTexto; i++){
        switch (textoIngresado[i]){
            case 'a':
                textoAuxiliar.push('ai');
                break;
            case 'e':
                textoAuxiliar.push('enter');
                break;
            case 'i':
                textoAuxiliar.push('imes');
                break;
            case 'o':
                textoAuxiliar.push('ober');
                break;
            case 'u':
                textoAuxiliar.push('ufat');
                break;
            default:
                textoAuxiliar.push(textoIngresado[i]);
                break;
        }
    }
    encriptacion = textoAuxiliar.join('');
    document.querySelector('#respuesta').innerHTML = encriptacion;
    // console.log(largoDelTexto)
    // console.log(textoAuxiliar)
    // console.log(encriptacion);
    }
    
/*Funcion para el boton de copiar*/

    function copiar(){
        navigator.clipboard.writeText(document.querySelector('#respuesta').value);
        
    }

/*Funcion para desencriptar*/

function desencriptar(){
    var textoSecreto = document.querySelector('#ingreseTxt').value;
    var largoTextoSecreto = textoSecreto.length;
    var textoAuxiliar2 = [];
    for (var i = 0; i < largoTextoSecreto; i++){
        switch (textoSecreto[i]){
            case 'a':
                textoAuxiliar2.push(textoSecreto[i]);
                i++
                break;
            case 'e':
                textoAuxiliar2.push(textoSecreto[i]);
                i+=4
                break;
            case 'i':
                textoAuxiliar2.push(textoSecreto[i]);
                i+=3
                break;
            case 'o':
                textoAuxiliar2.push(textoSecreto[i]);
                i+=3
                break;
            case 'u':
                textoAuxiliar2.push(textoSecreto[i]);
                i+=3
                break;
            default:
                textoAuxiliar2.push(textoSecreto[i]);
                break;
        }
    }
    desencriptacion = textoAuxiliar2.join('');
    document.querySelector('#respuesta').innerHTML = desencriptacion;
}

/*Evento de escucha del boton "Encriptar"*/


const boton = document.querySelector("#botonEncriptar");
boton.addEventListener("click", encriptar)
document.querySelector('#ingreseTxt').addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        encriptar();
    }
});
/*Evento de escucha del boton "Copiar"*/

document.querySelector('#botonCopiar').addEventListener("click", copiar)

/*Evento de escucha del boton "Desencriptar"*/
const boton2 = document.querySelector("#botonDesencriptar");
boton2.addEventListener("click", desencriptar)