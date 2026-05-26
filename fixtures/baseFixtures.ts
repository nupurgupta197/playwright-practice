import {test} from '@playwright/test';
import {LoginPage} from '../pages/login'; // for importing login page class
import {HomePage} from '../pages/home'; // for importing login page class

type MyFixtures = {

    loginPage: LoginPage; // for declatation of login page object
    homePage: HomePage // for declatation of home page object

};

const webTest = test.extend<MyFixtures>({

   loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {

        await use(new HomePage(page));
     }

});

export { webTest };
