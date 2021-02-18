class Juego{
    constructor(){
        this.empezarJuego();
        this.secuencia();
        setTimeout(() => {
            this.siguienteNivel();
        }, 500);
    }

    empezarJuego(){
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this);
        // alert("Hola Mundo");
        btnEmpezar.classList.add("hide");
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    secuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){  
        this.subnivel = 0;
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
        }
    }

    transformarColorNumero(color){
        switch (color) {
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
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

    eliminarEventsClick(){
        this.colores.celeste.removeEventListener('click',this.elegirColor);
        this.colores.verde.removeEventListener('click',this.elegirColor);
        this.colores.violeta.removeEventListener('click',this.elegirColor);
        this.colores.naranja.removeEventListener('click',this.elegirColor);
    }

    elegirColor(e){
        const nombreColor = e.target.dataset.color
        const numeroColor = this.transformarColorNumero(nombreColor);
        this.iluminarColor(nombreColor);
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel === this.nivel){
                this.nivel++;
                this.eliminarEventsClick();
                if(this.nivel == (ULTIMO_NIVEL + 1)){
                    // Gano!
                }else{
                    setTimeout(this.siguienteNivel,1500)
                }
            }
        }else{
            // Perdio
        }
    }
}

let btnEmpezar = document.getElementById("btnEmpezar");
let celeste = document.getElementById("celeste");
let violeta = document.getElementById("violeta");
let naranja = document.getElementById("naranja");
let verde = document.getElementById("verde");
const ULTIMO_NIVEL = 10;

function empezarJuego() {
     window.nuevoJuego = new Juego();
}