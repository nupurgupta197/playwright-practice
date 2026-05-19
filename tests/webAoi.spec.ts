import {test, expect} from '@playwright/test';

test('Open a browser', async ({browser}) => {

const context = await browser.newContext();
const page = await context.newPage();
page.goto('https://rahulshettyacademy.com/client/#/auth/login');
expect(await page.title()).toBe('Example Domain');

})

test('Call an API', async ({page}) => {



})

