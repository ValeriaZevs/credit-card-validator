import { isValidCardNumber } from '../luhn';

describe('Luhn validator', () => {
  test.each([
    '4111111111111111',
    '5555555555554444',
    '378282246310005',
    '2200244822627706',
  ])('validates correct card number %s', (number) => {
    expect(isValidCardNumber(number)).toBe(true);
  });

  test.each([
    '4111111111111112',
    '5555555555554440',
    '2200244822627700',
    'abcdef',
    '',
  ])('invalidates incorrect card number %s', (number) => {
    expect(isValidCardNumber(number)).toBe(false);
  });
});
