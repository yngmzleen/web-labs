function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('time2').innerHTML = currentTime;

    document.getElementById('timeAnalog').style.transform = `rotate(${180 + today.getSeconds() * 6 + (today.getMilliseconds() * 0.006)}deg) translate(0, 50px)`;

}

setInterval(showTime,1)