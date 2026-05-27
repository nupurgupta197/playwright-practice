//import {test, expect} from '@playwright/test';
import {webTest} from '../fixtures/baseFixtures';

let url = 'https://rahulshettyacademy.com/client';
let userName = 'anshika@gmail.com';
let password = 'Iamking@000';

webTest.beforeEach('Setup', async ({ loginPage }) => {
    await loginPage.navigateToUrl(url);
    await loginPage.loginToApp(userName, password);
});

webTest('Home Test', async ({ homePage }) => {
    await homePage.homePageVerify(userName, password);
});