let lastTime = (new Date()).getTime();
const checkInterval = 10000;
setInterval(function () {
    var currentTime = (new Date()).getTime();
    if (currentTime > (lastTime + checkInterval * 2)) {
        postMessage("wakeup");
    }
    lastTime = currentTime;
}, checkInterval);
