export function isValidCardNumber(number) {
  const clean = number.replace(/\D/g, '');

  if (!clean) {
    return false;
  }

  let sum = 0;
  let isDouble = false;

  for (let i = clean.length - 1; i >= 0; i -= 1) {
    let digit = Number(clean[i]);

    if (isDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isDouble = !isDouble;
  }

  return sum % 10 === 0;
}
