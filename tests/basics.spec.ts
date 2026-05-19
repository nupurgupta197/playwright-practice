import { test, expect } from '@playwright/test';


/*test('Google Test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL(/playwright/);
  await page.locator("//span[text()='Search']").click();
  await page.locator("//input[@class='DocSearch-Input']").fill('Playwright');
  await page.keyboard.press('Enter');
  //await expect(page.locator("//h1[text()='Playwright MCP']")).toBeVisible();
});*/

/*test('Select value from dropdown', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.selectOption("//div[@class='tocCollapsibleContent_vkbj']//ul", 'Introduction');
} )*/

test('Handle new tab or window', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //await page.click("//a[text()='Model Context Protocol']");
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click("//a[text()='Model Context Protocol']")
  ]);

  await expect(newPage).toHaveTitle('What is the Model Context Protocol (MCP)? - Model Context Protocol');
});


