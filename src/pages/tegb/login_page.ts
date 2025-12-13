import { Locator, Page, test } from "@playwright/test";
import { RegistrationPage } from "./registration_page.ts";
import { DashboardPage } from "./dashboard_page.ts";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tegb-frontend-88542200c6db.herokuapp.com/";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly registrationButton: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("[data-testid='username-input']");
    this.passwordInput = page.locator("[data-testid='password-input']");
    this.registrationButton = page.locator("[data-testid='register-button']");
    this.loginButton = page.locator("[data-testid='submit-button']");
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickRegistration() {
    await this.registrationButton.click();
    return new RegistrationPage(this.page);
  }

  async clickLogin() {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async login(username: string, password: string): Promise<DashboardPage> {
    await test.step("Login to TEGB", async () => {
      await this.fillUsername(username);
      await this.fillPassword(password);
      await this.clickLogin();
    });
    return new DashboardPage(this.page);
  }
}
