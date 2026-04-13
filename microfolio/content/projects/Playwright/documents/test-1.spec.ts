import { test, expect } from '@playwright/test';

test('barre de recherche avec texte', async ({ page }) => {
  await page.goto('https://labasse.github.io/tutti-frutti/');
  await page.getByRole('searchbox', { name: 'Chercher' }).click();
  await page.getByRole('searchbox', { name: 'Chercher' }).fill('ana');
  await expect(page.locator('#liste')).toContainText('AnanasNullam cursus sapien lacus, ut volutpat nunc semper non.BananeAenean non nunc porta, venenatis lacus non, auctor elit.CuisinerNos meilleures recettes :Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur mollis velit sagittis elit malesuada suscipit.In cursus tortor vel erat malesuada, eget tincidunt felis sagittis.Ut iaculis justo eget euismod posuere.Ut consequat neque eget orci malesuada, eget ornare urna vulputate.Nam molestie eros nec iaculis consectetur.');
});