import { test, expect } from '@playwright/test'


test('should navigate to the about page', async ( {page }) => {
	await page.goto('http://localhost:3000/')
	await page.click('text=About')
	await expect(page).toHaveURL('http://localhost:3000/about')
	await expect(page.locator('h1')).toContainText('About Page')
})


// import { test, expect } from '@playwright/test'

// test('should navigate to the about page', async ({ page }) => {
//   // インデックスページからテストを開始 （ baseURL は playwright.config.ts の webServer を通じて設定される）
//   await page.goto('http://localhost:3000/')
//   // 'About Page' が含まれている要素を見つけてクリック
//   await page.click('text=About Page')
//   // 新しい URL は "/about"になる（ baseURL はここで利用される）
//   await expect(page).toHaveURL('http://localhost:3000/about')
//   // 新しく遷移したページの h1 要素には "About Page" が含まれる
//   await expect(page.locator('h1')).toContainText('About Page')
// })