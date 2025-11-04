
const servs = document.querySelectorAll(".shorts");
const leftBtn = document.getElementById("s-left");
const rightBtn = document.getElementById("s-right");

let currentIndex = 0;

// Show only the first one at start
servs[currentIndex].classList.add("active");

function showServ(index) {
  servs[currentIndex].classList.remove("active");
  currentIndex = (index + servs.length) % servs.length; // wrap around
  servs[currentIndex].classList.add("active");
}

leftBtn.addEventListener("click", () => showServ(currentIndex - 1));
rightBtn.addEventListener("click", () => showServ(currentIndex + 1));



//jump by button
document.querySelectorAll(".sub-btn").forEach(button => {
  button.addEventListener("click", () => {
    const targetElement = document.getElementById("short-form");
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // smooth scrolling animation
        block: 'start'      // aligns top of element with top of viewport
      });
    }
  });
});



// MAIL SECTION
  document.querySelectorAll(".mail").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "mailto:ari@clipsalt.com";
    });
  });

 

  // CURSOR

  const cursor = document.querySelector(".cursor");

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!isTouchDevice && !prefersReducedMotion && cursor) {
  // Show our custom cursor
  cursor.style.display = "block";

  // Inject CSS to hide the default cursor
  const style = document.createElement("style");
  style.textContent = `
    * {
      cursor: none;
    }
  `;
  document.head.appendChild(style);

  // Position cursor div to cursor position
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });

  // Add 'click' class to cursor on mousedown and remove on mouseup
  document.addEventListener("mousedown", (e) => cursor.classList.add("click"));
  document.addEventListener("mouseup", (e) => cursor.classList.remove("click"));

  // Add 'pressable' class to cursor when hovering certain elements
  const items = document.querySelectorAll("a, button");
  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("pressable");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("pressable");
    });
  });
}