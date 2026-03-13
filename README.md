# Credit Card Validator

[![Deploy to GitHub Pages](https://github.com/ValeriaZevs/credit-card-validator/actions/workflows/pages.yml/badge.svg)](https://github.com/ValeriaZevs/credit-card-validator/actions/workflows/pages.yml)

**GitHub Pages:** https://valeriazevs.github.io/credit-card-validator/

Виджет для проверки номера банковской карты:
- определяет платёжную систему (Visa, MasterCard, American Express, Discover, Мир);
- проверяет корректность номера по алгоритму Луна;
- подсвечивает иконку платёжной системы и показывает результат проверки.

## Запуск проекта

```bash
npm install
npm run start
```

## Проверки

```bash
npm run lint
npm test
npm run build
```

## E2E

В каталоге `e2e` находится пример e2e-тестирования на Playwright.
