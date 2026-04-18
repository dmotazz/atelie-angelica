const produtos = document.querySelectorAll('.produto');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visivel');
      }, i * 150);
    }
  });
}, { threshold: 0.1 });

produtos.forEach(p => observer.observe(p));

const slides = document.querySelectorAll('.slide');
let atual = 0;

slides[atual].classList.add('ativo');

setInterval(() => {
  slides[atual].classList.remove('ativo');
  atual = (atual + 1) % slides.length;
  slides[atual].classList.add('ativo');
}, 4000);