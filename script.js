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

  if (event.target.tagName.toLowerCase() === "button" || event.target.id.toLowerCase() == "join-us") {
    cursor.style.backgroundColor = "black";
    cursor.style.width = "10px";
    cursor.style.height = "10px";
    // console.log(event.target.id.toLowerCase());
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

const servBox = document.getElementById('serv-box');
const leftBtn = document.getElementById('s-left');
const rightBtn = document.getElementById('s-right');

let visItems = 1;
let items = servBox.querySelectorAll('.shorts');
let currentIndex = 0;

// -------- Determine visible items based on screen width -------- //
function calcVisibleItems() {
  const screenW = window.innerWidth;

  if (screenW > 1110) {
    return 3;
  } else if (screenW > 600) {
    return 2;
  } else {
    return 1;
  }
}

// -------- Width of one item (including gap) -------- //
function getItemWidth() {
  const style = getComputedStyle(items[0]);
  const gap = parseInt(style.marginRight) || 10;
  return items[0].offsetWidth + gap;
}

// -------- Scroll to a specific index -------- //
function scrollToIndex(index, smooth = true) {
  const itemWidth = getItemWidth();
  servBox.scrollTo({
    left: index * itemWidth,
    behavior: smooth ? 'smooth' : 'instant'
  });
}

// ====== HANDLE RESIZE ====== //
function handleResize() {
  visItems = calcVisibleItems();

  // Clamp currentIndex so it doesn't overshoot new max
  const maxIndex = items.length - visItems;
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  if (currentIndex < 0) currentIndex = 0;

  // Recalculate widths + snap instantly (no smooth)
  scrollToIndex(currentIndex, false);
}

// Debounce resize handler
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 150);
});

// Initial calculation
visItems = calcVisibleItems();


// ====== BUTTON CLICK LOGIC ====== //
rightBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= items.length - visItems + 1) {
    currentIndex = 0;
  }
  scrollToIndex(currentIndex);
});

leftBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - visItems;
  }
  scrollToIndex(currentIndex);
});






//JUMP BY BUTTON
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
      document.getElementById("join-us").scrollIntoView({
        behavior: 'smooth', // smooth scrolling animation
        block: 'start'      // aligns top of element with top of viewport
      });
    });
  });




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

// EMAIL RELOAD
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('success') === 'true') {
    alert('Email was sent successfully!');
    // Optional: remove the query so the alert doesn’t show again on refresh
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});

// boxes match heights
function matchHeights() {
  const left = document.getElementById('ibox1');
  const right = document.getElementById('ibox2');
  left.style.height = `${right.scrollHeight}px`;
}

// run once after page load
window.addEventListener('load', matchHeights);

// optional: re-run on resize
window.addEventListener('resize', matchHeights);

