import { Locator, Page, expect } from '@playwright/test'

export class LoginPage {
  username: Locator
  password: Locator
  expectedUrl: string
  loginButton: Locator

  constructor(page: Page) {
    this.username = page.locator('input[id="username"]')
    this.password = page.locator('input[id="password"]')
    this.expectedUrl = "https://demo.applitools.com/"
    this.loginButton = page.locator('input[id="log-in"]')
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginButton.click()
  }

  async validateUrl(page: Page): Promise<void> {
    await expect(page).toHaveURL(this.expectedUrl)
  }
}