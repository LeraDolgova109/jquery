$(document).ready(function() {
    let currentPosition = 0;

    $('#moveLeft').on('click', function() {
        currentPosition -= 100;
        $('#movableElement').css('transform', `translateX(${currentPosition}px)`);
    });

    $('#moveRight').on('click', function() {
        currentPosition += 100;
        $('#movableElement').css('transform', `translateX(${currentPosition}px)`);
    });
});