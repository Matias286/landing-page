var wpp = "098452420"

function contacto(){
    alert("mi número telefónico es: "+wpp);
}

var ubicacion = window.scrollY;

window.onscroll = function(){
    let desplazamientoActual = window.scrollY;
    if(ubicacion>desplazamientoActual){
        document.getElementsByClassName('navegacion-principal').style.top = '0';
    }else{
        document.getElementsByClassName('navegacion-principal').style.top = '-100px';
    }
    ubicacion = desplazamientoActual;
}