
// =========================
// VIEW MY WORK BUTTON
// =========================

const button =
    document.getElementById("workButton");

const projects =
    document.getElementById("projects");


button.addEventListener(
    "click",
    function () {

        projects.scrollIntoView({

            behavior: "smooth"

        });

    }
);



// =========================
// PROJECT BUTTON
// =========================

function showProject(projectName) {

    alert(

        projectName +
        " project will be available here soon!"

    );

}



// =========================
// TYPING ANIMATION
// =========================

const words = [

    "Web Developer",

    "Java Programmer",

    "Freelancer",

    "Computer Science Student"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {


    const typingElement =
        document.getElementById("typing");


    const currentWord =
        words[wordIndex];


    if (!deleting) {


        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );


        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;


            setTimeout(
                typeEffect,
                1500
            );


            return;

        }


    }

    else {


        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );


        charIndex--;


        if (charIndex === 0) {


            deleting = false;


            wordIndex++;


            if (
                wordIndex ===
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 60 : 100

    );

}


typeEffect();



// =========================
// DARK / LIGHT MODE
// =========================

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener(
    "click",
    function () {


        document.body.classList.toggle(
            "dark-mode"
        );


        if (
            document.body.classList.contains(
                "dark-mode"
            )
        ) {

            themeButton.textContent =
                "☀️";

        }

        else {

            themeButton.textContent =
                "🌙";

        }

    }
);



// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {


    const windowHeight =
        window.innerHeight;


    revealElements.forEach(
        function (element) {


            const elementTop =
                element.getBoundingClientRect().top;


            if (
                elementTop <
                windowHeight - 100
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();
