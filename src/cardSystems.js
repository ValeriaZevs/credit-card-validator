const cardSystems = [
  {
    name: 'visa',
    pattern: /^4\d{12}(\d{3})?(\d{3})?$/,
  },
  {
    name: 'mastercard',
    pattern: /^(5[1-5]\d{14}|2(2[2-9]\d{12}|[3-6]\d{13}|7([01]\d{12}|20\d{12})))$/,
  },
  {
    name: 'amex',
    pattern: /^3[47]\d{13}$/,
  },
  {
    name: 'discover',
    pattern: /^(6011\d{12}|65\d{14}|64[4-9]\d{13})$/,
  },
  {
    name: 'mir',
    pattern: /^220[0-4]\d{12}$/,
  },
];

export function detectPaymentSystem(number) {
  const clean = number.replace(/\s|-/g, '');
  const system = cardSystems.find((item) => item.pattern.test(clean));
  return system ? system.name : null;
}

export default cardSystems;
