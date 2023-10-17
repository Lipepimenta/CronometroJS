// Selecionando elementos do DOM (HTML) usando seus IDs
const minutesEl = document.querySelector("#minutes"); // Elemento de minutos
const secondsEl = document.querySelector("#seconds"); // Elemento de segundos
const milisecondsEl = document.querySelector("#miliseconds"); // Elemento de milissegundos
const startBtn = document.querySelector("#startBtn"); // Botão de Iniciar
const pauseBtn = document.querySelector("#pauseBtn"); // Botão de Pausar
const resumeBtn = document.querySelector("#resumeBtn"); // Botão de Continuar
const resetBtn = document.querySelector("#resetBtn"); // Botão de Resetar

// Variáveis para controlar o cronômetro
let interval; // Para armazenar o intervalo do cronômetro
let minutes = 0; 
let seconds = 0; 
let miliseconds = 0;
let isPaused = false; // Indicador de pausa

// Adicionando event listeners aos botões
startBtn.addEventListener("click", startTimer); // Iniciar o cronômetro
pauseBtn.addEventListener("click", pauseTimer); // Pausar o cronômetro
resumeBtn.addEventListener("click", resumeTimer); // Continuar o cronômetro
resetBtn.addEventListener("click", resetTimer); // Resetar o cronômetro

function startTimer() {
    // Iniciar o intervalo do cronômetro
    interval = setInterval(() => {
        if (!isPaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            // Atualizar os elementos HTML com os valores do cronômetro
            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            milisecondsEl.textContent = formatMiliseconds(miliseconds);
        }
    }, 10);

    // Atualizar a exibição dos botões
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer() {
    // Pausar o cronômetro
    isPaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    // Continuar o cronômetro
    isPaused = false;
    resumeBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function resetTimer() {
    // Resetar o cronômetro
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    // Atualizar os elementos HTML com os valores zerados
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";

    // Atualizar a exibição dos botões
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}

// Função para formatar o tempo com zero à esquerda, se necessário
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Função para formatar os milissegundos com zero à esquerda, se necessário
function formatMiliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
