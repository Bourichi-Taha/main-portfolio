
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });
    // typed script animation
    var typed = new Typed(".typing", {
        strings: ["Front-end Developer", "Back-end Developer", "Mern-stack Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        startDelay: 1200,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing1", {
        strings: ["Front-end Developer", "Back-end Developer", "Mern-stack Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        startDelay: 1200,
        backSpeed: 60,
        loop: true
    });
    // toggle menubBar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
    //carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});

//gsap animations
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
    ".home-text",
    1,
    {
        opacity: 0,
        x: () => Math.random() * 400 - 200,
    },
    {
        opacity: 1,
        x: 0,
        stagger: 0.2
    },
);

gsap.fromTo(
    ".about-title",

    {
        opacity: 0,
        y: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".text-1",
            start: "top top",
            endTrigger: ".home-btn",
            end: "top top",
            scrub: true
        },
        opacity: 1,
        y: 0,
    },
);
gsap.fromTo(
    ".profileImg",

    {
        opacity: 0,
        x: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".about-title",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        x: 0,
        stagger: 0.2
    },
);
gsap.fromTo(
    ".servises-title",

    {
        opacity: 0,
        x: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".typing1",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        opacity: 1,
        x: 0,
    },
);
gsap.fromTo(
    ".servises-content>.card",

    {
        opacity: 0,
        x: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".servises-title",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        x: 0,
        ease: "in",
        stagger: 0.5
    },
);
gsap.fromTo(
    ".skills-title",

    {
        opacity: 0,
        y: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".servises-content>.card",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        y: 0,
    },
);
gsap.fromTo(
    ".skills-content>.column",

    {
        opacity: 0,
        x: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".skills-title",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        x: 0,
        stagger: 0.2
    },
);
gsap.fromTo(
    ".html",

    {
        width: 0
    },
    {
        scrollTrigger: {
            trigger: ".skills-title",
            start: "bottom center",
            endTrigger: ".html",
            end: "top center",
            scrub: true
        },
        width: "90%"
    }
);
gsap.fromTo(
    ".css",

    {
        width: 0
    },
    {
        scrollTrigger: {
            trigger: ".skills-title",
            start: "bottom center",
            endTrigger: ".html",
            end: "top center",
            scrub: true
        },
        width: "80%"
    }
);
gsap.fromTo(
    ".javascript",

    {
        width: 0
    },
    {
        scrollTrigger: {
            trigger: ".skills-title",
            start: "bottom center",
            endTrigger: ".html",
            end: "top center",
            scrub: true
        },
        width: "76%"
    }
);
gsap.fromTo(
    ".php",

    {
        width: 0
    },
    {
        scrollTrigger: {
            trigger: ".skills-title",
            start: "bottom center",
            endTrigger: ".html",
            end: "top center",
            scrub: true
        },
        width: "55%"
    }
);
gsap.fromTo(
    ".mysql",

    {
        width: 0
    },
    {
        scrollTrigger: {
            trigger: ".skills-title",
            start: "bottom center",
            endTrigger: ".html",
            end: "top center",
            scrub: true
        },
        width: "69%"
    }
);
gsap.fromTo(
    ".tools-title",

    {
        opacity: 0,
        y: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".javascript",
            start: "top center",
            endTrigger: ".mysql",
            end: "top center",
            scrub: true
        },
        opacity: 1,
        y: 0,
    },
);
gsap.fromTo(
    ".carousel>.card",

    {
        opacity: 0,
        y: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".tools-title",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        y: 0,
    },
);
gsap.fromTo(
    ".contact-title",

    {
        opacity: 0,
        y: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".carousel>.card",
            start: "center center",
            end: "top top",
            scrub: true
        },
        opacity: 1,
        y: 0,
    },
);
gsap.fromTo(
    ".contact-content .column",

    {
        opacity: 0,
        y: () => Math.random() * 400 - 200,
    },
    {
        scrollTrigger: {
            trigger: ".contact-title",
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        y: 0,
    },
);

//email emailJS
function sendEmail() {
    emailjs.sendForm("service_k8qdyrq", 'template_giu4ing', document.querySelector("#form"),'user_DLi4HUetQbj9btmASRcdz')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}

function handleSubmit() {
    sendEmail();
    document.querySelector("#form").reset();
    return false;
}