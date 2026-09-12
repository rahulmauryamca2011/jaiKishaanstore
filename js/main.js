// Jai Kisan — site interactions

document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('siteHeader');
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');

  // Header background on scroll
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu toggle
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close mobile menu after clicking a link
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  // Enquiry form — friendly success message
  // NOTE: replace the form's "action" URL in index.html with your own
  // Formspree / Web3Forms endpoint for this to actually deliver emails.
  var form = document.getElementById('enquiryForm');
  var successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      // If the placeholder endpoint hasn't been replaced yet, don't attempt
      // a real network submission — just show guidance instead.
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        alert('Almost there! Connect this form to Formspree (or Web3Forms) by replacing YOUR_FORM_ID in index.html — see README.md for the 2-minute setup.');
        return;
      }
      // Otherwise let it submit normally to the configured endpoint,
      // and show a friendly confirmation.
      successMsg.classList.add('visible');
    });
  }
});
