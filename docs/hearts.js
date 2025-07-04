const heartsBg = document.getElementById('hearts-bg');
let maxHearts = 24;
function createHeart() {
  if (!heartsBg) return;
  if (heartsBg.childElementCount >= maxHearts) return;
  const heart = document.createElement('div');
  heart.className = 'heart';
  const size = 20 + Math.random() * 24;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-40px';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heart.innerHTML = `
    <svg viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.5 2C21.0147 2 18.7618 3.2375 17.5 5.09375C16.2382 3.2375 13.9853 2 11.5 2C7.35786 2 4 5.35786 4 9.5C4 18.5 16 27 16 27C16 27 28 18.5 28 9.5C28 5.35786 24.6421 2 20.5 2H23.5Z" fill="#111" stroke="#000" stroke-width="1.5"/>
    </svg>
  `;
  heartsBg.appendChild(heart);
  setTimeout(() => {
    if (heart.parentNode) heart.remove();
  }, parseFloat(heart.style.animationDuration) * 1000);
}
if (heartsBg) {
  setInterval(createHeart, 600);
  for (let i = 0; i < 8; i++) setTimeout(createHeart, i * 400);
} 