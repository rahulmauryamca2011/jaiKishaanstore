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

  // Enquiry form — sends the enquiry straight to WhatsApp.
  // No backend needed: this builds a pre-filled message and opens
  // wa.me addressed to the business number set in data-whatsapp-number
  // on the <form> tag in index.html. The visitor just taps "Send" in
  // WhatsApp to complete it.
  var form = document.getElementById('enquiryForm');
  var successMsg = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var waNumber = form.getAttribute('data-whatsapp-number') || '';

      var name = (form.querySelector('#name') || {}).value || '';
      var phone = (form.querySelector('#phone') || {}).value || '';
      var city = (form.querySelector('#city') || {}).value || '';
      var type = (form.querySelector('#type') || {}).value || '';
      var message = (form.querySelector('#message') || {}).value || '';

      if (!name || !phone || !city) {
        // Let the browser's native required-field validation handle this.
        form.reportValidity();
        return;
      }

      var lines = [
        'New enquiry from the Jai Kishaan website:',
        '',
        'Name: ' + name,
        'Phone: ' + phone,
        'City/Town: ' + city,
        'Enquiry type: ' + type
      ];
      if (message) {
        lines.push('Message: ' + message);
      }

      var text = encodeURIComponent(lines.join('\n'));
      var waUrl = 'https://wa.me/' + waNumber + '?text=' + text;

      successMsg.classList.add('visible');
      window.open(waUrl, '_blank', 'noopener');
    });
  }
});
