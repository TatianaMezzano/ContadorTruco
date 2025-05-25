import {Contador} from "./contador.js";

const modal = document.querySelector("dialog");

const p1Nombre = "Nosotros";
const p2Nombre = "Ellos";

const partidaEnMemoria = JSON.parse(localStorage.getItem("truco")) || {
    [p1Nombre]: 0,
    [p2Nombre]: 0,
};

const partidap1 = partidaEnMemoria[p1Nombre];
const partidap2 = partidaEnMemoria[p2Nombre];

const p1 = new Contador(p1Nombre,document.getElementById("jugador1-container"),partidap1);
const p2 = new Contador(p2Nombre, document.getElementById("jugador2-container"),partidap2);

function reset(){
    p1.reset();
    p2.reset();
}

document.getElementById("reset").addEventListener("click",()=>modal.showModal())
document.getElementById("volver").addEventListener("click",()=>modal.close())
document.getElementById("aceptar").addEventListener("click",()=>{
    reset();
    modal.close();
})

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click",()=>{
    const partidaAGuardar = {
        [p1.nombre] : p1.numero,
        [p2.nombre] : p2.numero,
    }
    localStorage.setItem("truco",JSON.stringify(partidaAGuardar));
    })
   
})


