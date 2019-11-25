
// Sticky Navigation

let navbar = $(".navbarr");

$(window).scroll(function(){

    let oTop = $(".section-1").offset().top - window.innerHeight;
    if($(window).scrollTop()>oTop){
        navbar.addClass("sticky");
    }
    else{
        navbar.removeClass("sticky");
    }


    // console.log(oTop);
});


// mobile navigation

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        // Toggle Nav
        nav.classList.toggle('nav-active');

        //  Animate links

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
   
navSlide();









// Counter Animation

let nCount = function(selector){
    $(selector).each(function(){
        $(this).animate({
            Counter:$(this).text()
        },{
            duration:4000,
            easing:"swing",
            step:function(value){
                $(this).text(Math.ceil(value));
            }
        });
    });
};

let a=0; 
$(window).scroll(function(){
      let oTop = $(".numbers").offset().top - window.innerHeight;
     if(a==0&&$(window).scrollTop()>=oTop){
         a++;
         nCount(".rect>h1");
     }
});