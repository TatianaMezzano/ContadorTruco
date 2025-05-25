export class Contador{
    numero = 0;
    nombre;
    cuentaElement;
    containerElement;

    constructor(name, containerElement, cuentaInicial = 0){
        this.nombre = name;
        this.numero = cuentaInicial;
        this.containerElement = containerElement;
        containerElement.querySelector("h2").innerText = name;
        containerElement.querySelector(".agregar").addEventListener("click",()=>this.agregar());
        containerElement.querySelector(".restar").addEventListener("click",()=>this.restar());
        this.cuentaElement = containerElement.querySelector(".cuenta");
    }

    agregar(cantidad = 1){
        this.numero += cantidad;
        console.log(this.numero);
        this.actualizarCuenta();
    }

    restar(cantidad = 1){
        this.numero = Math.max(0,this.numero - cantidad);
        console.log(this.numero);
        this.actualizarCuenta();
    }

    reset(){
        this.numero = 0;
        this.actualizarCuenta();
    }

    actualizarCuenta(){
        const fosforosActuales = this.containerElement.querySelectorAll("img");        

        if (fosforosActuales){
            fosforosActuales.forEach(fosforo => this.cuentaElement.removeChild(fosforo))
        }

        for (let i = 0; i<this.numero;i++) {
            const nuevoFosforo = document.createElement("img");
            nuevoFosforo.src = "../img/fosforo.png";
            nuevoFosforo.classList.add("fosforo"+(i%5+1));
            this.cuentaElement.appendChild(nuevoFosforo);
            
        }
    }
}
