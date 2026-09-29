/* ==================================================
   EVERGREEN PUBLIC SCHOOL
   JAVASCRIPT
================================================== */


/* ==================================================
   HEADER SCROLL
================================================== */

const header =
    document.getElementById("header");


window.addEventListener("scroll", () => {

    if (!header) return;


    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* ==================================================
   WHATSAPP FLOATING ANIMATION
================================================== */

const whatsappBox =
    document.getElementById("whatsappBox");


let whatsappTimer;


function showWhatsApp() {

    if (!whatsappBox) return;


    whatsappBox.classList.add("show");


    clearTimeout(whatsappTimer);


    whatsappTimer = setTimeout(() => {

        whatsappBox.classList.remove("show");

    }, 4500);

}


window.addEventListener("scroll", () => {

    if (window.scrollY > 180) {

        showWhatsApp();

    }

});



/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn =
    document.getElementById("menuBtn");


const mobileMenu =
    document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {


    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });

}



/* ==================================================
   HERO IMAGE PARALLAX
================================================== */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage) return;


    const rect =
        heroImage.getBoundingClientRect();


    const windowHeight =
        window.innerHeight;


    if (
        rect.top < windowHeight &&
        rect.bottom > 0
    ) {

        const movement =
            (windowHeight - rect.top) * 0.025;


        heroImage.style.transform =
            `translateY(${movement - 20}px)`;

    }

});



/* ==================================================
   SMOOTH INTERNAL LINKS
================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {


        link.addEventListener("click", function(event) {


            const target =
                document.querySelector(
                    this.getAttribute("href")
                );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });


        });

    });