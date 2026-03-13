import { detectPaymentSystem } from '../cardSystems';

describe('Payment system detector', () => {
  test.each([
    ['4111 1111 1111 1111', 'visa'],
    ['5555-5555-5555-4444', 'mastercard'],
    ['378282246310005', 'amex'],
    ['6011111111111117', 'discover'],
    ['2200244822627707', 'mir'],
  ])('detects %s as %s', (number, expectedSystem) => {
    expect(detectPaymentSystem(number)).toBe(expectedSystem);
  });

  test.each([
    '7000000000000000',
    '4111x11111111111',
    '',
  ])('returns null for unsupported/invalid number %s', (number) => {
    expect(detectPaymentSystem(number)).toBeNull();
  });
});