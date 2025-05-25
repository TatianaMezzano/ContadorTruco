import {Contador} from "./contador.js";

const modal = document.querySelector("dialog");

console.log(document.getElementById("jugador1-container")); // ¿es null o es un div?


const p1 = new Contador("Nosotros",document.getElementById("jugador1-container"));
const p2 = new Contador("Ellos", document.getElementById("jugador2-container"));

function reset(){
    p1.reset();
    p2.reset();
}

document.getElementById("reset").addEventListener("click",()=>modal.showModal())
document.getElementById("volver").addEventListener("click",()=>modal.close())
document.getElementById("aceptar").addEventListener("click",()=>{
    reset();
    modal.close()
})


