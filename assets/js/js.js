class Juego{
    constructor(){
        this.empezarJuego();
    }

    empezarJuego(){
        // alert("Hola Mundo");
        btnEmpezar.classList.add("hide");
    }
}

let btnEmpezar = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");

function empezarJuego() {
    var nuevoJuego = new Juego();
}