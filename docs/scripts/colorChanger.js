
updateColorTheme(localStorage.getItem('color-theme'));

// Updates to the supplied theme
function updateColorTheme(theme) {
    if (theme == null) {
        updateColorThemeSelector('default');
    } else {
        updateColorThemeSelector(theme);
    }
    //document.documentElement.setAttribute('data-color-theme', theme);
    if (theme == null || theme == 'default') {
        document.querySelector('html').dataset.twrTheme = null;
    } else {
        document.querySelector('html').dataset.twrTheme = theme;
    }
}

//// Returns the prefers-color-scheme setting
//function getPreferedTheme() {
//    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//}

// Updates the theme selector icon
function updateColorThemeSelector(theme) {
    document.querySelectorAll('[data-color-theme-value]').forEach(function (selector) {
        if (selector.getAttribute('data-color-theme-value') === theme) {
            selector.classList.add('active');
            document.getElementById('current-color-theme').innerHTML = selector.firstElementChild.outerHTML;
        } else {
            selector.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Update the theme again after the page has loaded. This is mainly to update the theme picker icon.
    updateColorTheme(localStorage.getItem('color-theme'));

    // Add event listener to the theme switcher buttons
    document.querySelectorAll('[data-color-theme-value]').forEach(function (button) {
        button.addEventListener('click', function () {
            const theme = button.getAttribute('data-color-theme-value');
            localStorage.setItem('color-theme', theme);
            updateColorTheme(theme);
        });
    });
});

//// Add an event listener if prefers-color-scheme is updated.
//window.matchMedia('(prefers-color-scheme: dark)')
//    .addEventListener('change', ({ matches }) => {
//        const theme = localStorage.getItem('color-theme');
//        if (theme === null || theme === 'auto') {
//            updateTheme(getPreferedTheme());
//        }
//    });