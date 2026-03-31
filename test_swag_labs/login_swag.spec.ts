import { expect, test } from "@playwright/test";
import { LoginPageSwagLabs } from '../pages/login_swag_labs';
import dataLogin from '../Test-data/data_login_swag.json';

test.describe('ทดสอบระบบ Login ของ Swag Labs', () => {
    let loginPage: LoginPageSwagLabs;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSwagLabs(page);
        await loginPage.goto();
    });

    test('Should login successfully with valid user', async ({ page }) => {
        await loginPage.login(dataLogin.valid_user.username, dataLogin.valid_user.password);
        await expect(page).toHaveURL(/.*inventory/);
        await expect(page.locator('.title')).toContainText('Products');
        await page.waitForTimeout(3000);
    });

    test('Should show error message with lock user', async ({ page }) => {
        await loginPage.login(dataLogin.locked_user.username, dataLogin.locked_user.password);
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
        await page.waitForTimeout(3000);
    });

    test('Should show error message with invalid password', async ({ page }) => {
        await loginPage.login(dataLogin.wrong_password.username, dataLogin.wrong_password.password);
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match any user in this service');
        await page.waitForTimeout(3000);
    });
});