$(document).ready(function () {
    var sht = $(window).height();
    scroll_navbar(sht);
    colorBlue(sht);
    colorLine3(sht);
    //    $('.ancla').on('click', ancla);

})

function scroll_navbar(sh) {
    //Scroll Menu
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > sh) {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                console.log('Esto es un dispositivo móvil');
            } else {
                $('#navs').addClass('fixed-top bounceInDown');
                $('#navs').css('background-color', "rgb(33, 150, 243)");
            }

        } else {
            $('#navs').removeClass('fixed-top');
        }
    });
}

function colorBlue(h) {
    window.addEventListener('scroll', function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log('Esto es un dispositivo móvil');
        } else {
            let objeto = document.getElementById('color-blue');
            let scroll = objeto.getBoundingClientRect().top;
            if (scroll >= h) {
                $('#color-blue div').css({
                    "background-color": "#E040FB",
                    "border": "2px solid #E040FB"
                }).stop(true, true).fadeOut(2000).fadeIn(2000);
            }
        }
    })
}

function colorLine3(h) {
    window.addEventListener('scroll', function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log('Esto es un dispositivo móvil');
        } else {
            let objeto = document.getElementById('colorLine-3');
            let scroll = objeto.getBoundingClientRect().top;
            if (scroll >= h) {
                $('#colorLine-3 div').css({
                    "background-color": "#00BCD4",
                    "border": "2px solid #00BCD4"
                }).stop(true, true).fadeOut(2000).fadeIn(2000)
            }
        }
    })
}
