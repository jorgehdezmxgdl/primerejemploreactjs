var proceso;
var inicializa = true;
var puntaje    = 0;

function sumapuntaje(posicion){
    document.getElementById("topo"+posicion).style.visibility = "hidden";
    puntaje += 1;
    document.getElementById("puntaje").innerHTML = puntaje;
}

function inicia(){
    if (inicializa){
        proceso = setInterval(mueveTopo, 1500);
        document.getElementById("btnmensaje").innerHTML = "Detener";
    } else {
        clearInterval(proceso);
        document.getElementById("btnmensaje").innerHTML = "Iniciar";
    }
    inicializa = !inicializa;
}

function mueveTopo(){
    for (var i = 1; i <= 3; i++){
        var pleft = Math.floor(Math.random() * 1900);
        var ptop  = Math.floor(Math.random() * 700);
        document.getElementById("topo"+i).style.left = pleft + "px";
        document.getElementById("topo"+i).style.bottom = ptop + "px";
        document.getElementById("topo"+i).style.visibility = "visible";
    }
}