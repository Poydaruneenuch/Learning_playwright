import { test, expect } from '@playwright/test';
import { LoginPagePractice } from '../pages/loginPracitceAuto';
import dataLogin from '../Test-data/data_login_pratice_auto.json';

// จัดหมวดหมู่ด้วย test.describe()
test.describe('ทดสอบระบบ Login', () => {
  
  let loginPage: LoginPagePractice;

  // โค้ดในบล็อกนี้จะถูกเรียกใช้งาน "ก่อน" รันแต่ละ test() อัตโนมัติ
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPagePractice(page);
    await loginPage.goto();
  });

  test('Should login successfully with valid user', async ({ page }) => {
    // ไม่ต้อง new Class หรือเรียก .goto() แล้ว ลุยกรอกข้อมูลได้เลย!
    await loginPage.login(dataLogin.valid_user.username, dataLogin.valid_user.password);
    
    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.locator('h1.post-title')).toContainText('Logged In Successfully');
    await page.waitForTimeout(3000); 
  });

  test('Should show error message with invalid user', async ({ page }) => {
    // ข้ามขั้นตอนเปิดเว็บ มาถึงก็กรอกข้อมูลผิดได้เลย
    await loginPage.login(dataLogin.invalid_user.username, dataLogin.invalid_user.password);
    
    await expect(page).toHaveURL(/.*practice-test-login/);
    await expect(page.locator('#error')).toContainText('Your username is invalid!');
    await page.waitForTimeout(3000);
  });

  test('Should show error message with invalid password', async ({ page }) => {
    await loginPage.login(dataLogin.invalid_password.username, dataLogin.invalid_password.password);

    await expect(page).toHaveURL(/.*practice-test-login/);
    await expect(page.locator('#error')).toContainText('Your password is invalid!');
    await page.waitForTimeout(3000);
  });
});