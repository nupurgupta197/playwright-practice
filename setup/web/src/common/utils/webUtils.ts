import { Page, Locator } from '@playwright/test';

export class WebUtils {
    constructor(private page: Page) {}

    async fillInput(selector: string, text: string): Promise<void> {
        await this.page.locator(selector).fill(text);
    }

    async clickElement(selector: string): Promise<void> {
        await this.page.locator(selector).click();
    }

    async getText(selector: string): Promise<string> {
        return await this.page.locator(selector).textContent() || '';
    }

    async isElementVisible(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isVisible();
    }

    async waitForElement(selector: string, timeout = 5000): Promise<void> {
        await this.page.locator(selector).waitFor({ state: 'visible', timeout });
    }

    async getAllText(selector: string): Promise<string[]> {
        return await this.page.locator(selector).allTextContents();
    }

    async selectDropdown(selector: string, value: string): Promise<void> {
        await this.page.locator(selector).selectOption(value);
    }

    async getAttribute(selector: string, attribute: string): Promise<string | null> {
        return await this.page.locator(selector).getAttribute(attribute);
    }

    async scrollToElement(selector: string): Promise<void> {
        await this.page.locator(selector).scrollIntoViewIfNeeded();
    }

    async doubleClick(selector: string): Promise<void> {
        await this.page.locator(selector).dblclick();
    }

    async rightClick(selector: string): Promise<void> {
        await this.page.locator(selector).click({ button: 'right' });
    }

    async hoverElement(selector: string): Promise<void> {
        await this.page.locator(selector).hover();
    }

    async pressKey(key: string): Promise<void> {
        await this.page.keyboard.press(key);
    }

    async typeText(selector: string, text: string, delay = 50): Promise<void> {
        await this.page.locator(selector).type(text, { delay });
    }

    async clearInput(selector: string): Promise<void> {
        await this.page.locator(selector).clear();
    }

    async isElementEnabled(selector: string): Promise<boolean> {
        return await this.page.locator(selector).isEnabled();
    }

    async getElementCount(selector: string): Promise<number> {
        return await this.page.locator(selector).count();
    }

    async getIframeLocator(iframeSelector: string): Promise<Locator> {
        return this.page.frameLocator(iframeSelector).locator('body');
    }

    async takeScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path });
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async reloadPage(): Promise<void> {
        await this.page.reload();
    }

    async goBack(): Promise<void> {
        await this.page.goBack();
    }

    async closePage(): Promise<void> {
        await this.page.close();
    }

    async getPageTitle(): Promise<string> {
        return this.page.title();
    }
}
