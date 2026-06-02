//import {test, expect} from '@playwright/test';
import {webTest} from '../fixtures/webFixtures';

let url = 'https://rahulshettyacademy.com/client';
//let userName = 'anshika@gmail.com';
//let password = 'Iamking@000'; 

webTest.beforeEach('Setup', async ({ loginPage }) => {
    await loginPage.navigateToUrl(url);
});

webTest('Verify elements on login page', async ({ loginPage }) => {
    await loginPage.verifyElementsOnLoginPage();
});
