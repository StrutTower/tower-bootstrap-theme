﻿$(document).ready(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    $('#theme-switch').on('click', function (e) {
        e.preventDefault();
        var dark = $('#dark-stylesheet');
        var light = $('#light-stylesheet');
        if (dark.prop('disabled')) {
            dark.prop('disabled', false);
            light.prop('disabled', true);
        } else {
            light.prop('disabled', false);
            dark.prop('disabled', true);
        }
    });

    $('[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
    });

    $('.toast').toast('show');

    if ($.fn.summernote) {
        $('#summernote-test').summernote();
    }

    if ($.fn.select2) {
        $('.select2-test').select2({
            width: '100%'
        });
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
        $('#not-supported-warning').show();
    }
});

function toast(text, type) {
    var template = $('#toast-template').find('.toast').clone();

    $('#toast-notifications').append(template);
    template.find('.toast-body').text(text);

    if (type !== undefined && type.length > 0) {
        var header = template.find('.toast-header').removeClass('.bg-primary').addClass(type);
    }

    new bootstrap.Toast(template[0]).show();

    setTimeout(function () {
        template.remove();
    }, 6000);
}