// Typing Animation
const words = ["Cybersecurity Specialist", "Ethical Hacker", "Network Security Expert"];
let wordIndex = 0, charIndex = 0;
const typingElement = document.querySelector(".typing-animation");

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
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

document.addEventListener("DOMContentLoaded", type);

// Skill Progress Bars
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-done");
    progressBars.forEach((bar) => {
        const doneValue = bar.getAttribute("data-done");
        bar.style.width = doneValue + "%";
    });
});
// ✅ Prevent Page Scroll on Load
window.onload = function() {
    window.scrollTo(0, 0);
};

// ✅ Smooth Scroll for Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
<script>
    function showThankYou(event) {
        Event.preventDefault();

        // ✅ Hide the form
        document.querySelector('.contact-form form').style.display = 'none';

        // ✅ Show the Thank You message
        document.getElementById('thankYouMessage').classList.add('show');

        // ✅ Reset the form after 5 seconds (optional)
        setTimeout(() => {
            document.querySelector('.contact-form form').reset();
            document.querySelector('.contact-form form').style.display = 'block';
            document.getElementById('thankYouMessage').classList.remove('show');
        }, 5000);

        // ✅ Automatically submit the form
        event.target.submit();
    }
</script>

