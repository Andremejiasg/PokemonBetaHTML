//Variable global (PARA REALIZAR LOS ATAQUES)
let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3


//Iniciar el juego

function iniciarJuego() {
    let sectionReiniciarJuego = document.getElementById("Reiniciar")
    sectionReiniciarJuego.style.display = "none"
    let sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionseleccionarAtaque.style.display = "none"
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataquefuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueagua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataquetierra)

    let botonReiniciar = document.getElementById("Reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}
// Seleccion de Mascotas

function seleccionarMascotaJugador() {

    let sectionseleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionseleccionarMascota.style.display = "none"

    let sectionseleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionseleccionarAtaque.style.display = "block"

    let inputhipodoge = document.getElementById("Hipodoge")
    let inputcapipepo = document.getElementById("Capipepo")
    let inputratigueya = document.getElementById("Ratigueya")
    let spanmascotaJugador = document.getElementById("mascota-jugador")

    if(inputhipodoge.checked) {
        spanmascotaJugador.innerHTML = "Hipodoge"
    } else if(inputcapipepo.checked) {
        spanmascotaJugador.innerHTML = "Capipepo"
    } else if(inputratigueya.checked) { 
        spanmascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una Mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanmascotaEnemigo = document.getElementById("mascota-enemigo") 

    if(mascotaAleatoria == 1) {
        spanmascotaEnemigo.innerHTML = "Hipodoge"
    } else if(mascotaAleatoria == 2) {
        spanmascotaEnemigo.innerHTML = "Capipepo"
    } else {
        spanmascotaEnemigo.innerHTML = "Ratigueya"
    }
}

// Ataques

function ataquefuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueagua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataquetierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
}   

// Combate

function combate() {

    let spanVidaJugador = document.getElementById ("vidas-jugador")
    let spanVidaEnemigo = document.getElementById ("vidas-enemigo")

       if(ataqueEnemigo == ataqueJugador) {
           crearmensaje(" EMPATE")
       } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
           crearmensaje(" GANASTE")
           vidaEnemigo--
           spanVidaEnemigo.innerHTML = vidaEnemigo
             } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
           crearmensaje(" GANASTE")
           vidaEnemigo--
           spanVidaEnemigo.innerHTML = vidaEnemigo
       } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
           crearmensaje(" GANASTE")
           vidaEnemigo--
           spanVidaEnemigo.innerHTML = vidaEnemigo
       } else {
           crearmensaje(" PERDISTE") 
           vidaJugador--
           spanVidaJugador.innerHTML = vidaJugador
       }
       
       revisarVidas()
} 

//Revisar vidas

function revisarVidas() {
    if (vidaEnemigo == 0 ) {
        crearmensajeFinal("FELICITACIONES GANASTE")
    } else if (vidaJugador == 0) {
        crearmensajeFinal("PERDISTE CONTRA El ENEMIGO")
    }
}

//Mensajes de Combate

function crearmensaje(resultado) {

    let sectionmensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")

    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + " La mascota del enemigo ataco con " + ataqueEnemigo + resultado

    sectionmensajes.appendChild(parrafo)

}

//Mensaje de Combate Final

function crearmensajeFinal(resultadoFinal) {

    let sectionmensajes = document.getElementById("mensajes")
    
    let parrafo = document.createElement("p")
    
    parrafo.innerHTML = resultadoFinal
    
    sectionmensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    
    let sectionReiniciarJuego = document.getElementById("Reiniciar")
    sectionReiniciarJuego.style.display = "block"
}

//Reiniciar juego

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor( Math.random() * ( max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

