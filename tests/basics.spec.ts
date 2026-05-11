import { test, expect } from '@playwright/test';

/*test('basic example', async ({ page }) => {
  //const context = await browser.newContext();  
  //const page = await context.newPage();
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await page.locator("//span[text()='Search']").click();
  await page.locator("//input[@class='DocSearch-Input']").fill('Playwright');
  await page.keyboard.press('Enter');
  await expect(page.locator("//h2[text()='Playwright']")).toBeVisible();
});*/

test('Google Test', async ({ page }) => {

  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL(/playwright/);
  await page.locator("//span[text()='Search']").click();
  await page.locator("//input[@class='DocSearch-Input']").fill('Playwright');
  await page.keyboard.press('Enter');
  //await expect(page.locator("//h1[text()='Playwright MCP']")).toBeVisible();
});
