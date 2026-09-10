const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));
} else {
  revealElements.forEach(el => el.classList.add('visible'));
}

const form = document.getElementById('project-form');
const success = document.getElementById('form-success');

form?.addEventListener('submit', event => {
  event.preventDefault();
  success?.classList.add('show');
});

const processHeading = document.querySelector('.process-intro h2');
if (processHeading) processHeading.textContent = 'From rough idea to ready-to-launch.';

const confidentCopy = document.querySelector('.feeling-grid article:nth-child(3) p');
if (confidentCopy) confidentCopy.textContent = 'A polished, professional website builds trust before they ever contact you.';

const micdropLabel = document.querySelector('.micdrop-shell .eyebrow-text');
const micdropHeading = document.querySelector('.micdrop-shell h2');
const micdropCopy = document.querySelector('.micdrop-shell > p:not(.eyebrow-text)');
const micdropButton = document.querySelector('.micdrop-shell .button-primary');
if (micdropLabel) micdropLabel.textContent = 'Still wondering if I’m the right designer?';
if (micdropHeading) micdropHeading.textContent = 'If this page kept your attention, imagine what yours could do for your customers.';
if (micdropCopy) micdropCopy.textContent = 'Good design gives people a reason to keep reading, remember your business, and take the next step.';
if (micdropButton) micdropButton.innerHTML = 'Let’s build yours <span>↗</span>';
