$(document).ready(main);

var contador = 1;

function main () {
    $('.menu_bar').click(function(){
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

    // Mostramos y ocultamos submenus

    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });

    $("ul").click(function(p){
        p.stopPropagation();
    })
}


//Slider servicios

const slider =document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast); //4 posiciones: antes de empezar, después de empezar, antes de terminar y después de terminar

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];//De los 4 solo toma al primero
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500); //1000 es un segundo, 500 medio segundo
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");//De los 4 solo toma al primero
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500); //1000 es un segundo, 500 medio segundo
}

btnRight.addEventListener('click', function(){
    Next()
});

btnLeft.addEventListener('click', function(){
    Prev()
});

//Slider automático

setInterval(function(){
    Next();
}, 10000);

