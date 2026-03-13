import { isValidCardNumber } from '../luhn';

describe('Luhn validator', () => {
  test.each([
    '4111111111111111',
    '5555 5555 5555 4444',
    '3782-822463-10005',
    '2200244822627707',
  ])('validates correct card number %s', (number) => {
    expect(isValidCardNumber(number)).toBe(true);
  });

  test.each([
    '4111111111111112',
    '5555555555554440',
    '2200244822627700',
    '411111111111',
    '41111111111111111111',
    '4111x11111111111',
    'abcdef',
    '',
  ])('invalidates incorrect card number %s', (number) => {
    expect(isValidCardNumber(number)).toBe(false);
  });
});