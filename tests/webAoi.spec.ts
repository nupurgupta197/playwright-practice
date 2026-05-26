import {test, expect, BrowserContext} from '@playwright/test';

let webContext: BrowserContext;
test.beforeAll('Open a browser', async ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
await page.locator("#userPassword").fill("Iamking@000");
await page.locator("[value='Login']").click();
await page.waitForLoadState('networkidle');
await context.storageState({path:'state.json'});
webContext = await browser.newContext({storageState:'state.json'}); //it will open new browser with same logged in user

})

test('Client app login', async () => {

const email = ''
const productName = 'Zara Coat 4';
const page = await webContext.newPage();
await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
const products = await page.locator(".card-body");
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);

const count = await products.count();
for(let i=0; i<count; ++i){
    if(await products.nth(i).locator("b").textContent() === productName){
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}

})

