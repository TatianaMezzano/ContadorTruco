export class Contador{
    numero = 0;
    nombre;

    constructor(name, containerElement, cuentaInicial = 0){
        this.nombre = name;
        this.numero = cuentaInicial;
        containerElement.querySelector("h2").innerText = name;
        containerElement.querySelector(".agregar").addEventListener("click",()=>this.agregar());
        containerElement.querySelector(".restar").addEventListener("click",()=>this.restar());
    }

    agregar(cantidad = 1){
        this.numero += cantidad;
        console.log(this.numero);
    }

    restar(cantidad = 1){
        this.numero = Math.max(0,this.numero - cantidad);
        console.log(this.numero);
    }

    reset(){
        this.numero = 0;
    }
}
