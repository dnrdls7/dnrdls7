function currentTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    document.getElementById("timenow").innerHTML = hour + " : " + min + " : " + sec;
}

function liveTime() {
    currentTime();
    setInterval(currentTime, 1000);
}

window.addEventListener('load', liveTime)

var audio = document.getElementById("bgm1");

function bgmVol() {
    audio.volume = 0.2;
}

function playBgm() {
    audio.play();
}

setTimeout(() => bgmVol(), 500);
setTimeout(() => bgmVol(), 1000);

window.addEventListener('load', )