import {test, expect, Locator, Page} from '@playwright/test';


export class LoginPage {
        page: Page;
        userName = '#userEmail';
        password = '#userPassword';
        loginButton = "[value='Login']";

        constructor(page : Page) {
            this.page = page;
        }

        async loginToApp(username: string, password: string) {
            await this.page.locator(this.userName).fill(username);
            await this.page.locator(this.password).fill(password);
            await this.page.locator(this.loginButton).click();
        }

}
    
