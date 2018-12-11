window.onresize = function () {
    window.requestAnimationFrame(function () {
        var AvailableWidth = window.innerWidth;
        var fontSize = (AvailableWidth / 375) * 10;
        fontSize = fontSize > 25 ? 25 : fontSize;
        fontSize = fontSize < 10 ? 10 : fontSize;
        jsEnvironment = document.getElementById('jsEnvironment');
        jsEnvironment.style.fontSize = fontSize + 'px';
    });
}
window.onload = function () {
    var AvailableWidth = window.innerWidth;
    var fontSize = (AvailableWidth / 375) * 10;
    fontSize = fontSize > 25 ? 25 : fontSize;
    fontSize = fontSize < 10 ? 10 : fontSize;
    jsEnvironment = document.getElementById('jsEnvironment');
    jsEnvironment.style.fontSize = fontSize + 'px';

    //pc端也可以滚动picker
    if (~navigator.userAgent.toLowerCase().indexOf('windowswechat')) {
        delete window.ontouchstart
    }
}
