// CURSOR FOLLOWING (with smooth delay)
const cursor = document.getElementById("cursor");

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// how "slow" the cursor follows — smaller = slower, larger = faster
const speed = 0.15;

document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX - 5;
  mouseY = event.clientY - 5;

  if (event.target.tagName.toLowerCase() === "button" || event.target.id.toLowerCase("join-us")) {
    cursor.style.backgroundColor = "black";
    cursor.style.width = "10px";
    cursor.style.height = "10px";
  } else {
    cursor.style.backgroundColor = "var(--primary-color)";
    cursor.style.width = "15px";
    cursor.style.height = "15px";
  }
});

function animate() {
  // interpolate toward the mouse position
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animate);
}

animate();


// SHORTS GALLERY
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
    const targetElement = document.getElementById("compare");
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

 
// // SCROLLING
//   let scrollPosition = 0;
//   const scrollSpeed = 0.8; // Adjust for desired slowness

//   window.addEventListener('wheel', (e) => {
//       e.preventDefault(); // Prevent default scroll

//       scrollPosition += e.deltaY * scrollSpeed;
//       window.scrollTo(0, scrollPosition);
//   }, { passive: false });


// FAQ
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    if (answer.classList.contains('open')) {
      // close smoothly
      answer.style.maxHeight = answer.scrollHeight + 'px';
      requestAnimationFrame(() => {
        answer.style.maxHeight = '0';
        answer.classList.remove('open');
      });
    } else {
      // open smoothly
      answer.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';

      // reset maxHeight after animation so it adapts if content changes
      answer.addEventListener('transitionend', () => {
        if (answer.classList.contains('open')) {
          answer.style.maxHeight = 'none';
        }
      }, { once: true });
    }
  });
});