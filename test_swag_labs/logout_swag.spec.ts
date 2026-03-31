import { expect, test } from "@playwright/test";
import { LoginPageSwagLabs } from '../pages/login_swag_labs';
import { LogoutPageSwag } from '../pages/logout_swag_lab';
import dataLogin from '../Test-data/data_login_swag.json';

test.describe('ทดสอบระบบ Logout ของ Swag Labs', () => {
    let loginPage: LoginPageSwagLabs;
    let logoutPage: LogoutPageSwag;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSwagLabs(page);
        logoutPage = new LogoutPageSwag(page);
        await loginPage.goto();
        await loginPage.login(dataLogin.valid_user.username, dataLogin.valid_user.password);
    });

    test('Should logout successfully', async ({ page }) => {
        await logoutPage.logout();
        await expect(page).toHaveURL('https://www.saucedemo.com/');
        await expect(page.locator('#login-button')).toBeVisible();
        await page.waitForTimeout(3000);
    });
});
