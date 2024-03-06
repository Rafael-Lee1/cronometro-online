let isRunning = false;
let startTime;
let interval;

document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);

function startStop() {
    if (!isRunning) {
        startTime = new Date().getTime() - (startTime ? startTime : 0);
        interval = setInterval(updateDisplay, 10);
        document.getElementById('startStop').textContent = 'Parar';
    } else {
        clearInterval(interval);
        document.getElementById('startStop').textContent = 'Iniciar';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    document.getElementById('startStop').textContent = 'Iniciar';
    document.getElementById('display').textContent = '00:00:00';
    isRunning = false;
    startTime = undefined;
}

function updateDisplay() {
    let currentTime = new Date().getTime() - startTime;
    let hours = Math.floor(currentTime / 3600000);
    let minutes = Math.floor((currentTime % 3600000) / 60000);
    let seconds = Math.floor((currentTime % 60000) / 1000);
    let milliseconds = Math.floor(currentTime % 1000);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    milliseconds = String(milliseconds).padStart(3, '0');

    document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
