var sec = 00;
var min = 00;
var hr = 00;
var interval;
var isRunning = false;


const start = () => {
    if (!isRunning) {
        watch()
        interval = setInterval(watch, 1000)
    }

    isRunning = true;

}

const pause = () => {
    clearInterval(interval)
    isRunning = false;
}

const stop = () => {
    clearInterval(interval)
    document.getElementById('counter').innerText = '00:00:00'
    isRunning = false;
    hr =00;
    min = 00;
    sec = 00;
    

}

const twoDigits = (digit) => {
    if (digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    }
}

const watch = () => {
    sec++;
    document.getElementById('counter').innerText = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec)
    if (sec == 60) {
        min++
        sec = 0;
        if (min == 60) {
            min = 0;
            sec = 0;
            hr++
        }
    }


}