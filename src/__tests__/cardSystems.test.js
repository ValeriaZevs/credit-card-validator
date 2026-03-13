import { detectPaymentSystem } from '../cardSystems';

describe('Payment system detector', () => {
  test.each([
    ['4111111111111111', 'visa'],
    ['5555555555554444', 'mastercard'],
    ['378282246310005', 'amex'],
    ['6011111111111117', 'discover'],
    ['2200244822627706', 'mir'],
  ])('detects %s as %s', (number, expectedSystem) => {
    expect(detectPaymentSystem(number)).toBe(expectedSystem);
  });

  test('returns null for unsupported number', () => {
    expect(detectPaymentSystem('7000000000000000')).toBeNull();
  });
});
