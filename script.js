  const container = document.getElementById('serv-box');
  const leftBtn = document.getElementById('left');
  const rightBtn = document.getElementById('right');

  // Scroll by one card width
  const scrollAmount = container.querySelector('.serv').offsetWidth + 20; // 20 = gap between cards

  leftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Optional: click + drag to scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => isDown = false);
  container.addEventListener('mouseup', () => isDown = false);

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    container.scrollLeft = scrollLeft - walk;
  });




  document.querySelectorAll(".click").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "mailto:ari@clipsalt.com";
    });
  });

  document.querySelectorAll(".join-btn").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = "mailto:ari@clipsalt.com";
    });
  });