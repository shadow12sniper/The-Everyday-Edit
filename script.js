// Dark mode toggle
const darkModeBtn = document.getElementById('darkModeToggle');
const darkPref = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setDarkMode(on) {
  if (on) {
    document.body.classList.add('dark');
    darkModeBtn.textContent = '☀️';
    localStorage.setItem('darkMode', 'on');
  } else {
    document.body.classList.remove('dark');
    darkModeBtn.textContent = '🌙';
    localStorage.setItem('darkMode', 'off');
  }
}

// Initial dark mode state
if (darkPref === 'on' || (darkPref === null && prefersDark)) {
  setDarkMode(true);
} else {
  setDarkMode(false);
}

darkModeBtn.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark'));
});

// Read more toggles
document.querySelectorAll('.card').forEach(card => {
  const moreBtn = card.querySelector('.read-more');
  const moreContent = card.querySelector('.more-content');
  moreBtn.addEventListener('click', () => {
    const isHidden = moreContent.hasAttribute('hidden');
    if (isHidden) {
      moreContent.removeAttribute('hidden');
      moreBtn.textContent = 'Read less';
    } else {
      moreContent.setAttribute('hidden', '');
      moreBtn.textContent = 'Read more';
    }
  });
});