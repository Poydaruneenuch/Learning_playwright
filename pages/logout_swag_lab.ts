// Import necessary modules from Playwright
import { Page, Locator } from "@playwright/test";

//สร้าง Page Object Model สำหรับหน้า Logout ของ Swag Labs

//ส่วนประกาศตัวแปร (Properties)
export class LogoutPageSwag {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

// Constructor เพื่อกำหนดค่าเริ่มต้นให้กับตัวแปรต่างๆ
    constructor(page: Page) {
        this.page = page;
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }
// Method สำหรับเปิดหน้าเว็บของ Swag Labs
async goto() {
    await this.page.goto('https://www.saucedemo.com/');
}

// Method สำหรับทำการ Logout
    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}