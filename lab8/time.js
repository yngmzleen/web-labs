function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('time2').innerHTML = currentTime;
}

setInterval(showTime,1)