# E2E example

Пример e2e-проверки на Playwright

```js
import { test, expect } from '@playwright/test';

test('card validator should show valid result', async ({ page }) => {
  await page.goto('http://localhost:9000');
  await page.fill('#card-number', '4111111111111111');
  await page.click('button[type="submit"]');
  await expect(page.locator('#result')).toHaveText('Card number is valid');
});
```
