var typed = new Typed(".typing-text", {
    strings: ["Frontend development", "Backend development", "Web designing", "Android development", "Web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});


/* SCROLL HOME */
srtop.reveal('.detail .right h2', { delay: 200 });
srtop.reveal('.detail .right h1', { delay: 200 });
srtop.reveal('.detail .right p', { delay: 200 });
srtop.reveal('.detail .right .aboutme', { delay: 200 });

srtop.reveal('.detail .left .img-fluid', { delay: 400 });
srtop.reveal('.detail .right .linkedin', { interval: 600 });
srtop.reveal('.detail .right .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.detail .right .instagram', { interval: 600 });
srtop.reveal('.detail .right .email', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.AboutSec h2', { delay: 200 });
srtop.reveal('.AboutSec .right2 p', { delay: 200 });
srtop.reveal('.AboutSec .right2 button', { delay: 200 });
srtop.reveal('.AboutSec .left2 img', { delay: 200 });
srtop.reveal('.AboutSec .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.SkillSec .container', { interval: 200 });
srtop.reveal('.SkillSec .container .card', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.EduSec .education-cards', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.ContSec', { delay: 400 });
srtop.reveal('.contact .leftside .box2', { delay: 400 });


$(document).ready(function () {

    // $('#menu').click(function () {
    //     $(this).toggleClass('fa-times');
    //     $('.navbar').toggleClass('nav-toggle');
    // });

    // // $(window).on('scroll load', function () {
    // //     $('#menu').removeClass('fa-times');
    // //     $('.navbar').removeClass('nav-toggle');

    // //     if (window.scrollY > 60) {
    // //         document.querySelector('#scroll-top').classList.add('active');
    // //     } else {
    // //         document.querySelector('#scroll-top').classList.remove('active');
    // //     }

    //     // scroll spy
    //     $('section').each(function () {
    //         let height = $(this).height();
    //         let offset = $(this).offset().top - 200;
    //         let top = $(window).scrollTop();
    //         let id = $(this).attr('id');

    //         if (top > offset && top < offset + height) {
    //             $('.navbar ul li a').removeClass('active');
    //             $('.navbar').find(`[href="#${id}"]`).addClass('active');
    //         }
    //     });
    // });
});


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}