$(document).ready(function () {
    $('[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
    });
});