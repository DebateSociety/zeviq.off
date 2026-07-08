/* ==========================================
   ZEVIQ OFFICIAL WEBSITE
   script.js
========================================== */

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Navbar shadow while scrolling

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});

// Reveal animation

const revealElements = document.querySelectorAll(
".stat-card, .feature, .event-card, .testimonial"
);

const reveal = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 80){

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// Animated Counters

const counters = document.querySelectorAll(".stat-card h1");

counters.forEach(counter=>{

    const targetText = counter.innerText;

    const number = parseInt(targetText);

    if(isNaN(number)) return;

    let count = 0;

    const speed = Math.max(10, Math.floor(2000 / number));

    const update = ()=>{

        if(count<number){

            count++;

            counter.innerText = count + "+";

            setTimeout(update,speed);

        }

        else{

            counter.innerText = targetText;

        }

    }

    update();

});

// Back To Top Button

const topButton = document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#6C3BFF";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.zIndex="9999";
topButton.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Newsletter Button

const newsletterForm=document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("🎉 Thank you for subscribing to ZEVIQ!");

newsletterForm.reset();

});

}

// Contact Form

const contactForm=document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! Your message has been received.");

contactForm.reset();

});

}

console.log("ZEVIQ Website Loaded Successfully 🚀");
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.onclick = () => {

        document.body.classList.toggle("light");

        themeBtn.innerHTML =
            document.body.classList.contains("light")
            ? "☀"
            : "🌙";

    };

}
const membershipForm = document.getElementById("membershipForm");

if (membershipForm) {
  membershipForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(
      "🎉 Thank you for applying to ZEVIQ!\n\nWe have received your application and will contact you soon."
    );

    membershipForm.reset();
  });
}
