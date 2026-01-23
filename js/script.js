document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.querySelector('.menu-close');

  if (!hamburger || !menuOverlay) return;

  // OPEN / SLUIT via hamburger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // SLUIT via close knop
  menuClose?.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  });

});

document.addEventListener('DOMContentLoaded', () => {

  /* =====================
     WhatsApp knop
  ====================== */
  const whatsappBtn = document.getElementById('whatsappBtn');
  whatsappBtn?.addEventListener('click', () => {
    window.open('https://wa.me/31643037004', '_blank', 'noopener');
  });

  /* =====================
     Plan knop scroll
  ====================== */
  const planBtn = document.getElementById('planBtn');
  planBtn?.addEventListener('click', () => {
    document.getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* =====================
     Preloader
  ====================== */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 2300); // match CSS animatie
    }, 3000);
  }

  /* =====================
     Taal wisselaar
  ====================== */
  const translations = {
    NL: {
      nav_about: "diensten",
      nav_method: "tarieven",
      nav_contact: "Contact",
      footer_home: "Home"
    },
    EN: {
      nav_about: "services",
      nav_method: "pricing",
      nav_contact: "Contact",
      footer_home: "Home"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (translations[lang]?.[key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      setLanguage(btn.dataset.lang);
    });
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(r => observer.observe(r));

const cards = document.querySelectorAll('.hr-card');

cards.forEach(card => cardObserver.observe(card));

gsap.registerPlugin(ScrollTrigger);

gsap.from(".main-section h1", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".main-section p", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  stagger: 0.15,
  ease: "power3.out"
});

gsap.from(".cbtn", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 0.8,
  ease: "power2.out"
});


gsap.utils.toArray(".hr-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    delay: i * 0.08,
    ease: "power3.out"
  });
});

gsap.utils.toArray(".split-section").forEach(section => {
  const content = section.querySelector(".split-content");
  const image = section.querySelector(".split-image");

  gsap.from(content, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    x: -40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });

  gsap.from(image, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    x: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out"
  });
});

gsap.to(".hero-wrapper", {
  backgroundPosition: "50% 20%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-wrapper",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
