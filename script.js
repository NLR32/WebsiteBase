
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

 
// SCROLLING
  let scrollPosition = 0;
  const scrollSpeed = 0.8; // Adjust for desired slowness

  window.addEventListener('wheel', (e) => {
      e.preventDefault(); // Prevent default scroll

      scrollPosition += e.deltaY * scrollSpeed;
      window.scrollTo(0, scrollPosition);
  }, { passive: false });