document.addEventListener('DOMContentLoaded', () => {
  // 📌 Elements
  const whatsappBtn = document.getElementById('whatsappBtn');
  const planBtn = document.getElementById('planBtn');

  // WhatsApp button
  whatsappBtn?.addEventListener('click', () => {
    window.open('https://wa.me/31616827562', '_blank', 'noopener');
  });

  // Plan button scroll to contact
  planBtn?.addEventListener('click', () => {
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({behavior:'smooth', block:'start'});
  });

  // Preloader
  const preloader = document.querySelector('.preloader');
  if(preloader){
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => { preloader.style.display = 'none'; }, 1200);
    }, 3000);
  }
});
 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


  function setLanguage(lang) {
    for (let key in translations[lang]) {
      const el = document.querySelector(`[data-key="${key}"]`);
      if(el) el.innerHTML = translations[lang][key];
    }
  }

  // Knoppen
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});