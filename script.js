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
