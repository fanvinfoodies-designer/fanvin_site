// small interaction script: nav toggle, reveal on scroll, simple form handler
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
  toggle.setAttribute('aria-expanded', !expanded);
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
},{ threshold: 0.12 });

reveals.forEach(r => obs.observe(r));

// simple contact form (no backend) — show a message and reset
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  if(!name){
    note.textContent = 'Please enter your name.';
    return;
  }
  note.textContent = 'Thanks, ' + (name.split(' ')[0] || name) + '! Your message was recorded (demo).';
  form.reset();
});
