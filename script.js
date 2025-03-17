// ✅ Typing Animation
const words = ["Cybersecurity Engineer", "Web Developer", "Cybersecurity Specialist", "Ethical Hacker", "Network Security Expert"];
let wordIndex = 0, charIndex = 0;
const typingElement = document.querySelector(".typing-animation");

if (typingElement) {
    function type() {
        if (charIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, 1000);
    });
}

// ✅ Skill Progress Bars
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-done");
    if (progressBars.length > 0) {
        progressBars.forEach((bar) => {
            const doneValue = bar.getAttribute("data-done");
            bar.style.width = doneValue + "%";
            bar.style.opacity = 1;
            bar.style.transition = "width 1.5s ease-in-out, opacity 1s";
        });
    }
});

// ✅ Prevent Page Scroll on Load
window.onload = function () {
    window.scrollTo(0, 0);
};

// ✅ Smooth Scroll for Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ✅ Contact Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact form");
    if (!contactForm) return;

    let thankYouMessage = document.querySelector(".thank-you-message");
    if (!thankYouMessage) {
        thankYouMessage = document.createElement("div");
        thankYouMessage.className = "thank-you-message";
        thankYouMessage.innerHTML = "Your message has been sent successfully!";
        contactForm.parentNode.appendChild(thankYouMessage);
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                thankYouMessage.style.display = "block";
                contactForm.reset();
                setTimeout(() => {
                    thankYouMessage.style.display = "none";
                }, 5000);
            } else {
                alert("Failed to send message. Please try again.");
            }
        })
        .catch(error => {
            console.error("Form submission error:", error);
            alert("Something went wrong.");
        });
    });
});

// ✅ Section Reveal Animation on Scroll
document.addEventListener("DOMContentLoaded", function () {
    function revealSections() {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Run on load in case sections are already in view
});

// ✅ Flip Cards Functionality
document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flip-card");
    if (flipCards.length === 0) return;

    flipCards.forEach((card) => {
        const front = card.querySelector(".flip-card-front");
        const back = card.querySelector(".flip-card-back");

        if (!front || !back) return;

        // Flip functionality
        card.addEventListener("click", function (event) {
            if (event.target.classList.contains("reveal-button")) return;

            flipCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove("active");
                    otherCard.style.zIndex = "1"; 
                }
            });

            card.classList.toggle("active");
            card.style.zIndex = "10"; 
        });
    });

    // ✅ Reveal Button Functionality
    document.querySelectorAll(".reveal-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent closing the card
            const imageUrl = this.getAttribute("data-image"); 
            if (imageUrl) {
                window.open(imageUrl, "_blank"); // Open image in a new tab
            }
        });
    });

    // ✅ Close the Card when Clicking Outside
    document.addEventListener("click", function (event) {
        flipCards.forEach(card => {
            if (!card.contains(event.target) && !event.target.classList.contains("reveal-button")) {
                card.classList.remove("active");
                card.style.zIndex = "1"; 
            }
        });
    });
});

// ✅ Flip Cards Reveal on Scroll
document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flip-card");
    function revealOnScroll() {
        flipCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.classList.add("reveal");
                card.style.transition = "opacity 0.8s ease-in-out, transform 0.6s ease-in-out";
            }
        });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("certificateImage");
    const closeBtn = document.querySelector(".close");

    // Function to show the certificate in modal
    window.showCertificate = function (imageSrc) {
        modal.style.display = "flex";
        modalImg.src = imageSrc;
        modalImg.classList.add("animate-zoom"); // Add zoom animation
    };

    // Function to close the certificate modal
    window.closeCertificate = function () {
        modal.style.display = "none";
        modalImg.classList.remove("animate-zoom"); // Remove animation after closing
    };

    // Close the modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeCertificate();
        }
    });

    // Smooth Scroll Effect for Navigation Links (Optional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Fade-in Animation for Certifications Section
    const certCards = document.querySelectorAll(".cert-card");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    certCards.forEach(card => observer.observe(card));
});
//certificate 

function flipCard(card) {
    card.classList.toggle("flipped");
  }
  