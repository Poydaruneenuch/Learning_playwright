import { test, expect } from '@playwright/test';

test.describe('Login Feature Testing', () => {
  test('Should login successfully with valid user', async ({ page }) => {
    
    // 1. เปิดหน้าเว็บสำหรับฝึกเทสต์
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // 2. กรอกข้อมูล Username และ Password
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    
    // 3. กดปุ่ม Submit
    await page.locator('#submit').click();

    // 4. ตรวจสอบความถูกต้อง (ต้องไปหน้าใหม่ และมีข้อความ Logged In Successfully)
    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.locator('h1.post-title')).toContainText('Logged In Successfully');

    // 🌟 แถม: สั่งให้บอทหยุดนิ่ง 3 วินาที (3000 มิลลิวินาที) เพื่อให้คุณดูหน้าจอทันก่อนมันจะปิด
    await page.waitForTimeout(3000); 
  });
});