const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', saved);
toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
document.getElementById('regForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('ثبت‌نام شما با موفقیت انجام شد. لینک وبینار به ایمیل ارسال می‌شود.');
  e.target.reset();
});