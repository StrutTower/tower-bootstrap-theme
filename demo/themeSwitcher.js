window.addEventListener('load', function () {
    var darkCss = document.getElementById('dark-theme');
    var lightCss = document.getElementById('light-theme');

    lightCss.setAttribute('disabled', 'disabled');

    var themeButton = document.getElementById('theme-switcher');
    themeButton.addEventListener('click', function (e) {
        if (darkCss.hasAttribute('disabled')) {
            darkCss.removeAttribute('disabled');
            lightCss.setAttribute('disabled', 'disabled');
        } else {
            lightCss.removeAttribute('disabled');
            darkCss.setAttribute('disabled', 'disabled');
        }
    });
});