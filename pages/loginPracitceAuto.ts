// Import necessary modules from Playwright
import { Page, Locator } from "@playwright/test";

//สร้าง Page Object Model สำหรับหน้า Login ของ Practice Test Automation

//ส่วนประกาศตัวแปร (Properties)
export class LoginPagePractice {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

// Constructor เพื่อกำหนดค่าเริ่มต้นให้กับตัวแปรต่างๆ
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('#submit');
        this.successMessage = page.locator('.success');
    }
// Method สำหรับเปิดหน้าเว็บของ Practice Test Automation
async goto() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
}

// Method สำหรับกรอกข้อมูล Username และ Password
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}