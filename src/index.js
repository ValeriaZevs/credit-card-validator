import './style.css';
import visaImage from './assets/visa.svg';
import mastercardImage from './assets/mastercard.svg';
import mirImage from './assets/mir.svg';
import amexImage from './assets/amex.svg';
import discoverImage from './assets/discover.svg';
import { isValidCardNumber } from './luhn';
import { detectPaymentSystem } from './cardSystems';

const cardIcons = {
  visa: visaImage,
  mastercard: mastercardImage,
  mir: mirImage,
  amex: amexImage,
  discover: discoverImage,
};

function renderWidget() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <section class="widget">
      <div class="cards">
        ${Object.keys(cardIcons)
    .map((name) => `<img data-system="${name}" src="${cardIcons[name]}" alt="${name}" />`)
    .join('')}
      </div>
      <form class="form-row" id="validator-form">
        <input id="card-number" type="text" placeholder="Credit card number" />
        <button type="submit">Click to Validate</button>
      </form>
      <div id="result" class="result"></div>
    </section>
  `;

  const form = document.querySelector('#validator-form');
  const input = document.querySelector('#card-number');
  const result = document.querySelector('#result');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = input.value.trim();
    const paymentSystem = detectPaymentSystem(number);
    const valid = isValidCardNumber(number);

    document.querySelectorAll('.cards img').forEach((img) => {
      const active = img.dataset.system === paymentSystem;
      img.classList.toggle('active', active);
    });

    result.className = `result ${valid ? 'valid' : 'invalid'}`;
    result.textContent = valid ? 'Card number is valid' : 'Card number is invalid';
  });
}

renderWidget();
