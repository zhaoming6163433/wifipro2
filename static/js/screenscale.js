var requestAnimFrame = (function() {
    return window.requestAnimationFrame || (window).webkitRequestAnimationFrame || (window).mozRequestAnimationFrame || (window).oRequestAnimationFrame || window.msRequestAnimationFrame || function(G) {
        window.setTimeout(G, 1000 / 60, new Date().getTime());
    };
})();
window.onresize = function () {
    requestAnimFrame(function () {
        var AvailableWidth = window.innerWidth;
        var fontSize = (AvailableWidth / 375) * 10;
        fontSize = fontSize > 20 ? 20 : fontSize;
        fontSize = fontSize < 10 ? 10 : fontSize;
        jsEnvironment = document.getElementById('jsEnvironment');
        jsEnvironment.style.fontSize = fontSize + 'px';
    });
}
window.onload = function () {
    var AvailableWidth = window.innerWidth;
    var fontSize = (AvailableWidth / 375) * 10;
    fontSize = fontSize > 20 ? 20 : fontSize;
    fontSize = fontSize < 10 ? 10 : fontSize;
    jsEnvironment = document.getElementById('jsEnvironment');
    jsEnvironment.style.fontSize = fontSize + 'px';

    //pc端也可以滚动picker
    if (~navigator.userAgent.toLowerCase().indexOf('windowswechat')) {
        delete window.ontouchstart
    }
}
