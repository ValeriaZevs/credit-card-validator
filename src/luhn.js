function isValidCardNumber(number) {
  const normalized = number.trim();

  if (!/^\d[\d\s-]*\d$|^\d$/.test(normalized)) {
    return false;
  }

  const clean = normalized.replace(/[\s-]/g, '');

  if (clean.length < 13 || clean.length > 19) {
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

export { isValidCardNumber };
export default isValidCardNumber;
