document.addEventListener('DOMContentLoaded', () => {
  // 📌 Elements
  const whatsappBtn = document.getElementById('whatsappBtn');
  const planBtn = document.getElementById('planBtn');

  // WhatsApp button
  whatsappBtn?.addEventListener('click', () => {
    window.open('https://wa.me/31622341519', '_blank', 'noopener');
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


document.addEventListener('DOMContentLoaded', () => {
  // Alle elementen met vertaalbare tekst identificeren via data-key
  const translations = {
  NL: {
    "nav_about": "✦diensten",
    "nav_method": "✦tarieven",
    "nav_contact": "✦Contact",
    "welcome_title": "Welkom",
    "welcome_sub": "",
    "reading_title": "",
    "reading_desc": "",
    "photoreading_title": "",
    "photoreading_desc": "",
    "coaching_title": "",
    "coaching_desc": "",
    "about_title": "",
    "about_text1": "",
    "about_text2": "",
    "contact_title": "",
    "contact_sub": "",
    "contact_form_title": "",
    "contact_form_sub": "",
    "contact_form_email": "",
    "contact_form_question": "",
    "contact_form_button": "",
    "highlight1_title": "",
    "highlight1_desc": "",
    "highlight2_title": "",
    "highlight2_desc": "",
    "highlight3_title": "",
    "highlight3_desc": "",
    "method_title": "",
    "method_sub": "",
    "step1_title": "",
    "step1_text": "",
    "step2_title": "",
    "step2_text": "",
    "step3_title": "",
    "step3_text": "",
    "step4_title": "",
    "step4_text": "",
    "contact_info_title": "",
    "contact_location_label": "",
    "contact_location_value": "",
    "contact_response_label": "",
    "contact_response_value": "",
    "contact_practical_title": "",
    "contact_practical_text": "",
    "contact_session_title": "",
    "contact_session_text": "",
    "location_title": "",
    "location_sub": "",
    "location_address_title": "",
    "location_space_label": "",
    "location_space_value": "",
    "location_hours_label": "",
    "location_hours_value": "",
    "location_access_label": "",
    "location_access_value": "",
    "footer_about_text": "",
    "footer_nav_title": "",
    "footer_home": "Home",
    "footer_about": "Over mij",
    "footer_method": "Werkwijze",
    "footer_contact_nav": "Contact",
    "footer_location": "",
    "footer_response": "",
    "footer_follow": "",
    "footer_copyright": ""
  },
  EN: {
    "nav_about": "✦",
    "nav_method": "✦",
    "nav_contact": "✦",
    "welcome_title": "",
    "welcome_title": "",
    "welcome_sub": "",
    "reading_title": "",
    "reading_desc": "",
    "photoreading_title": "",
    "photoreading_desc": "",
    "coaching_title": "",
    "coaching_desc": "",
    "about_title": "",
    "about_text1": "",
    "about_text2": "",
    "contact_title": "",
    "contact_sub": "",
    "contact_form_title": "",
    "contact_form_sub": "",
    "contact_form_email": "",
    "contact_form_question": "",
    "contact_form_button": "",
    "highlight1_title": "",
    "highlight1_desc": "",
    "highlight2_title": "",
    "highlight2_desc": "",
    "highlight3_title": "",
    "highlight3_desc": "",
    "method_title": "",
    "method_sub": "",
    "step1_title": "",
    "step1_text": "",
    "step2_title": "",
    "step2_text": "",
    "step3_title": "",
    "step3_text": "",
    "step4_title": "",
    "step4_text": "",
    "contact_info_title": "",
    "contact_location_label": "",
    "contact_location_value": "",
    "contact_response_label": "",
    "contact_response_value": "",
    "contact_practical_title": "",
    "contact_practical_text": "",
    "contact_session_title": "",
    "contact_session_text": "",
    "location_title": "",
    "location_sub": "",
    "location_address_title": "",
    "location_space_label": "",
    "location_space_value": "",
    "location_hours_label": "",
    "location_hours_value": "",
    "location_access_label": "",
    "location_access_value": "",
    "footer_about_text": "",
    "footer_nav_title": "",
    "footer_home": "",
    "footer_about": "",
    "footer_method": "",
    "footer_contact_nav": "",
    "footer_location": "",
    "footer_response": "",
    "footer_follow": "",
    "footer_copyright": ""
  }
};


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
