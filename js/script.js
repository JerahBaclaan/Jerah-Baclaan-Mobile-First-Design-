/* =========================================================
   JERAH BACLAAN MOBILE FIRST PORTFOLIO
   JavaScript
   PART 1A
   ========================================================= */


/* =========================================================
   HAMBURGER NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        /* Change hamburger icon to X */
        const icon = menuToggle.querySelector("i");

        if (icon) {

            if (isOpen) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

}


/* =========================================================
   CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
   ========================================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (!navMenu || !menuToggle) {
            return;
        }

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

});


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function (event) {

    if (!navMenu || !menuToggle) {
        return;
    }

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton &&
        navMenu.classList.contains("active")
    ) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

});


/* =========================================================
   RESET MOBILE MENU WHEN SCREEN BECOMES DESKTOP
   ========================================================= */

window.addEventListener("resize", function () {

    if (!navMenu || !menuToggle) {
        return;
    }

    if (window.innerWidth >= 992) {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    }

});
/* =========================================================
   AUTOMATIC CURRENT YEAR
   ========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const allNavLinks =
    document.querySelectorAll(".nav-menu a");

allNavLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }

});


/* =========================================================
   SKILL PROGRESS BAR ANIMATION
   ========================================================= */

function animateProgressBar(elementId, percentage) {

    const progressBar =
        document.getElementById(elementId);

    if (!progressBar) {
        return;
    }

    /* Start at zero */
    progressBar.style.width = "0%";

    /* Animate after page loads */
    setTimeout(function () {

        progressBar.style.width =
            percentage + "%";

    }, 300);
}


/* =========================================================
   JERAH'S TECHNICAL SKILLS
   ========================================================= */

animateProgressBar(
    "progress-java",
    75
);

animateProgressBar(
    "progress-word",
    85
);

animateProgressBar(
    "progress-powerpoint",
    80
);


/* =========================================================
   SMOOTH SCROLLING
   ========================================================= */

const internalLinks =
    document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
/* =========================================================
   CONTACT MESSAGE FORM
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        /* Prevent actual page refresh */
        event.preventDefault();


        /* Get form fields */
        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const subject =
            document.getElementById("subject");

        const message =
            document.getElementById("message");


        /* Basic validation */
        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {
            return;
        }


        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            subject.value.trim() === "" ||
            message.value.trim() === ""
        ) {

            if (formMessage) {

                formMessage.textContent =
                    "Please complete all fields before sending your message.";

                formMessage.classList.add("show");

            }

            return;
        }


        /* =================================================
           SUCCESS MESSAGE
           ================================================= */

        if (formMessage) {

            formMessage.textContent =
                "Thank you, " +
                name.value.trim() +
                "! Your message has been submitted successfully.";

            formMessage.classList.add("show");

        }


        /* Clear form */
        contactForm.reset();


        /* Hide success message after a few seconds */
        setTimeout(function () {

            if (formMessage) {
                formMessage.classList.remove("show");
            }

        }, 5000);

    });

}


/* =========================================================
   EMAIL VALIDATION
   ========================================================= */

const emailInput =
    document.getElementById("email");

if (emailInput) {

    emailInput.addEventListener("input", function () {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            this.value !== "" &&
            !emailPattern.test(this.value)
        ) {

            this.setCustomValidity(
                "Please enter a valid email address."
            );

        } else {

            this.setCustomValidity("");

        }

    });

}


/* =========================================================
   PREVENT EMPTY SPACES AS THE ONLY INPUT
   ========================================================= */

const formInputs =
    document.querySelectorAll(
        "#contactForm input, #contactForm textarea"
    );

formInputs.forEach(function (input) {

    input.addEventListener("blur", function () {

        if (this.value.trim() === "") {
            this.value = "";
        }

    });

});
/* =========================================================
   JERAH BACLAAN MOBILE FIRST PORTFOLIO
   FINAL JAVASCRIPT
   PART 1D
   ========================================================= */


/* =========================================================
   PAGE LOAD INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------
       Make sure navigation starts in the correct state
       --------------------------------------------- */

    const menuButton =
        document.getElementById("menuToggle");

    const navigation =
        document.getElementById("navMenu");

    if (menuButton && navigation) {

        menuButton.setAttribute(
            "aria-expanded",
            navigation.classList.contains("active")
                ? "true"
                : "false"
        );

    }


    /* ---------------------------------------------
       Set current year
       --------------------------------------------- */

    const yearElement =
        document.getElementById("currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ---------------------------------------------
       Add loaded class
       --------------------------------------------- */

    document.body.classList.add("page-loaded");

});


/* =========================================================
   KEYBOARD ACCESSIBILITY FOR MENU
   ========================================================= */

document.addEventListener("keydown", function (event) {

    const navigation =
        document.getElementById("navMenu");

    const menuButton =
        document.getElementById("menuToggle");

    if (!navigation || !menuButton) {
        return;
    }


    /* Close menu with Escape */
    if (
        event.key === "Escape" &&
        navigation.classList.contains("active")
    ) {

        navigation.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        const icon =
            menuButton.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

        menuButton.focus();

    }

});


/* =========================================================
   PREVENT DOUBLE SUBMISSION
   ========================================================= */

const portfolioForm =
    document.getElementById("contactForm");

if (portfolioForm) {

    portfolioForm.addEventListener(
        "submit",
        function () {

            const submitButton =
                portfolioForm.querySelector(
                    ".submit-btn"
                );

            if (submitButton) {

                /* Store original button text */
                if (
                    !submitButton.dataset.originalText
                ) {

                    submitButton.dataset.originalText =
                        submitButton.innerHTML;

                }

                /* Temporarily change button */
                submitButton.innerHTML =
                    '<i class="fas fa-check"></i> Message Submitted';

                /* Prevent accidental double-click */
                submitButton.disabled = true;

                setTimeout(function () {

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        submitButton.dataset.originalText;

                }, 3000);

            }

        }
    );

}


/* =========================================================
   EXTERNAL LINKS
   ========================================================= */

const externalLinks =
    document.querySelectorAll(
        'a[href^="http://"], a[href^="https://"]'
    );

externalLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        /*
         * External social links are intentionally
         * opened in a new browser tab when the
         * HTML contains target="_blank".
         */

    });

});


/* =========================================================
   SCROLL TO TOP WHEN LOGO IS CLICKED
   ========================================================= */

const brandLink =
    document.querySelector(".brand");

if (brandLink) {

    brandLink.addEventListener("click", function (event) {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop() || "index.html";

        /*
         * Only intercept the logo when already
         * on the homepage.
         */

        if (
            currentPage === "index.html" ||
            currentPage === ""
        ) {

            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

}


/* =========================================================
   FINISHED
   ========================================================= */
