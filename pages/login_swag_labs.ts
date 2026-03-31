// Import necessary modules from Playwright
import { Page, Locator } from "@playwright/test";

//สร้าง Page Object Model สำหรับหน้า Login ของ Swag Labs

//ส่วนประกาศตัวแปร (Properties)
export class LoginPageSwagLabs {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;

    // Constructor เพื่อกำหนดค่าเริ่มต้นให้กับตัวแปรต่างๆ
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
        
    }
    // Method สำหรับเปิดหน้าเว็บของ Swag Labs
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    // Method สำหรับกรอกข้อมูล Username และ Password
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}