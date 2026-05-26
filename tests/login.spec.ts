//import {test, expect} from '@playwright/test';
import {webTest} from '../fixtures/baseFixtures';

let userName = 'anshika@gmail.com';
let password = 'Iamking@000';

webTest.only('Login Test', async ({ loginPage }) => {
    await loginPage.loginToApp(userName, password);
});