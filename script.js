// Typing Animation
const words = ["Cybersecurity Engineer", "Web Developer", "Ethical Hacker", "Network Security"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement = document.querySelector(".typing-animation");

function type() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
        // Typing forward
        charIndex++;
        setTimeout(type, 250);  // Slower typing speed
    } else if (isDeleting && charIndex > 0) {
        // Deleting (now even slower)
        charIndex--;
        setTimeout(type, 180);  // Slower deleting speed
    } else {
        // Switch between typing and deleting
        isDeleting = !isDeleting;

        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(type, isDeleting ? 2000 : 1200);  // Longer pauses
    }
}

// Start the typing animation when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1200); // Slight delay before animation starts
    initProgressBars();
});

// Skill Progress Bars (unchanged)
function initProgressBars() {
    const progressBars = document.querySelectorAll(".progress-done");
    if (progressBars.length > 0) {
        progressBars.forEach((bar) => {
            const doneValue = bar.getAttribute("data-done");
            if (doneValue) {
                bar.style.width = doneValue + "%";
                bar.style.opacity = 1;
                bar.style.transition = "width 1.5s ease-in-out, opacity 1s";
            }
        });
    }
}


// ✅ Smooth Scroll for Sections
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ✅ Contact Form
function initContactForm() {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    if (form && responseMessage) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            responseMessage.textContent = "Sending...";

            try {
                const res = await fetch("https://your-backend-endpoint.com/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });

                const result = await res.json();
                responseMessage.textContent = result.message || "Message sent!";
                form.reset();
            } catch (error) {
                console.error("Error:", error);
                responseMessage.textContent = "Failed to send message. Try again.";
            }
        });
    }
}

// ✅ Section Reveal Animation on Scroll
function initSectionReveal() {
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
    revealSections();
}

// ✅ Flip Cards Functionality
function initFlipCards() {
    const flipCards = document.querySelectorAll(".flip-card");
    if (flipCards.length === 0) return;

    flipCards.forEach((card) => {
        const front = card.querySelector(".flip-card-front");
        const back = card.querySelector(".flip-card-back");

        if (!front || !back) return;

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

    // Reveal Button Functionality
    document.querySelectorAll(".reveal-button").forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            const imageUrl = this.getAttribute("data-image");
            if (imageUrl) {
                window.open(imageUrl, "_blank");
            }
        });
    });

    // Close the Card when Clicking Outside
    document.addEventListener("click", function (event) {
        flipCards.forEach(card => {
            if (!card.contains(event.target)) {
                card.classList.remove("active");
                card.style.zIndex = "1";
            }
        });
    });
}

// ✅ Flip Cards Reveal on Scroll
function initFlipCardReveal() {
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
}

// ✅ Certificate Modal
function initCertificateModal() {
    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("certificateImage");
    const closeBtn = document.querySelector(".close");

    if (modal && modalImg) {
        window.showCertificate = function (imageSrc) {
            modal.style.display = "flex";
            modalImg.src = imageSrc;
            modalImg.classList.add("animate-zoom");
        };

        window.closeCertificate = function () {
            modal.style.display = "none";
            modalImg.classList.remove("animate-zoom");
        };

        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeCertificate();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", closeCertificate);
    }
}

// ✅ Fade-in Animation for Certifications
function initCertificationAnimation() {
    const certCards = document.querySelectorAll(".cert-card");
    if (certCards.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        }, { threshold: 0.3 });

        certCards.forEach(card => observer.observe(card));
    }
}

// ✅ Flip Card Function
function flipCard(card) {
    if (card) {
        card.classList.toggle("flipped");
    }
}

// ✅ Initialize Everything
document.addEventListener("DOMContentLoaded", function () {
    // Initialize typing animation
    typingElement = document.querySelector(".typing-animation");
    if (typingElement) {
        setTimeout(type, 1000);
    }

    // Initialize all other components
    initProgressBars();
    initSmoothScroll();
    initContactForm();
    initSectionReveal();
    initFlipCards();
    initFlipCardReveal();
    initCertificateModal();
    initCertificationAnimation();

    // Auto-redirect for thank-you page
    if (window.location.pathname.includes("thank-you.html")) {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 5000);
    }
});

// ✅ Prevent Page Scroll on Load
window.onload = function () {
    window.scrollTo(0, 0);
};
document.addEventListener("DOMContentLoaded", function() {
  // Animate vertical line
  const line = document.querySelector('.vertical-line');
  if (line) {
    setTimeout(() => {
      line.style.opacity = '1';
      line.style.transition = 'opacity 1s ease-out';
    }, 500);
  }

  // Set up scroll animations for cards
  const cards = document.querySelectorAll('.flip-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach(card => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});

// Scroll animation trigger
document.addEventListener('DOMContentLoaded', function() {
    const cardWrappers = document.querySelectorAll('.flip-card-wrapper');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
  
    cardWrappers.forEach(wrapper => {
      observer.observe(wrapper);
    });
  });

  