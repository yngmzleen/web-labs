function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    if (isNaN(daysCount)){
        document.getElementById('daysCount').innerHTML = 'Введите дату!'
    }
    else if (daysCount <= 0){
        document.getElementById('daysCount').innerHTML = 'Эта дата еще не наступила!'
    }
    else{
        document.getElementById('daysCount').innerHTML = 'Количество дней с заданной даты:' + daysCount + ' дней!'
    }
    
}

function closeDaysCount() {
    document.getElementById('daysCount').innerHTML = ''
    document.querySelector('input[type=date]').value = ''
}