let temporizador, tiempo = 0, intervalo;

function iniciarTemporizador() {
    tiempo = document.getElementById('tiempoInicial').value;
    if (!intervalo) intervalo = setInterval(() => {
        tiempo--;
        actualizarTemporizador();
        if (tiempo < 0) resetearTemporizador();
    }, 1000);
}

function pausarTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetearTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
    tiempo = document.getElementById('tiempoInicial').value;
    actualizarTemporizador();
}

function actualizarTemporizador() {
    let segundos = tiempo % 60;
    let minutos = Math.floor(tiempo / 60);
    let horas = Math.floor(minutos / 60);
    minutos %= 60;
    horas %= 60;

    segundos = segundos < 10 ? "0" + segundos : segundos;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    horas = horas < 10 ? "0" + horas : horas;

    temporizador.textContent = horas + ":" + minutos + ":" + segundos;
}

document.addEventListener("DOMContentLoaded", () => {
    temporizador = document.getElementById("temporizador");
});
