class Juego{
    constructor(){
        this.empezarJuego();
        this.secuencia();
        this.siguienteNivel();
    }

    empezarJuego(){
        this.elegirColor = this.elegirColor.bind(this);
        // alert("Hola Mundo");
        btnEmpezar.classList.add("hide");
        this.nivel = 7;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    secuencia(){
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){  
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    transformarNumeroColor(numero){
        switch (numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
            default:
                break;
        }
    }

    
    iluminarSecuencia(){
        for(let i = 0 ; i < this.nivel ; i++){
            let color = this.transformarNumeroColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color),1000 * i);
        }
    }
    
    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color),350);
    }
    
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click',this.elegirColor);
        this.colores.verde.addEventListener('click',this.elegirColor);
        this.colores.violeta.addEventListener('click',this.elegirColor);
        this.colores.naranja.addEventListener('click',this.elegirColor);
    }

    elegirColor(e){
        console.log(this);
    }
}

let btnEmpezar = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");

function empezarJuego() {
     window.nuevoJuego = new Juego();
}