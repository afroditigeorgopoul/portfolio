window.addEventListener('load', ()=>{
const s = document.getElementById('splash');
setTimeout(()=>{ s.style.opacity='0'; s.style.pointerEvents='none'; s.style.transition='opacity 600ms ease';}, 900);
revealOnScroll();
});
function revealOnScroll(){
const els = document.querySelectorAll('.reveal');
els.forEach(el=>{ const r = el.getBoundingClientRect(); if(r.top < window.innerHeight - 80) el.classList.add('active'); });
}
window.addEventListener('scroll', revealOnScroll);
document.addEventListener('click', e=>{
if(e.target.matches('a[href^="#"]')){
e.preventDefault(); document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior:'smooth'});
}
});
