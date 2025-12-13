import { Locator, Page, test } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class DashboardPage {
  readonly page: Page;
  readonly logo: Locator;
  readonly titleHeader: Locator;
  readonly logoutButton: Locator;
  readonly sidebarHome: Locator;
  readonly sidebarAccounts: Locator;
  readonly sidebarTransactions: Locator;
  readonly sidebarSupport: Locator;
  readonly profileSummary: Locator;
  readonly profileTitle: Locator;
  readonly profileFirstName: Locator;
  readonly profileLastName: Locator;
  readonly profileEmail: Locator;
  readonly profilePhone: Locator;
  readonly profileAge: Locator;
  readonly editProfileToggle: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly ageInput: Locator;
  readonly saveButton: Locator;
  readonly accountTitle: Locator;
  readonly accountNumber: Locator;
  readonly accountNumberLabel: Locator;
  readonly balance: Locator;
  readonly balanceLabel: Locator;
  readonly accountType: Locator;
  readonly accountTypeLabel: Locator;
  readonly addAccountButton: Locator;
  readonly footerCopyright: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator("[data-testid='logo-img']");
    this.titleHeader = page.locator("[data-testid='app-title']");
    this.logoutButton = page.locator("[data-testid='logout-button']");
    this.sidebarHome = page.locator("//li[contains(text(),'Domů')]");
    this.sidebarAccounts = page.locator("//li[contains(text(),'Účty')]");
    this.sidebarTransactions = page.locator(
      "//li[contains(text(),'Transakce')]"
    );
    this.sidebarSupport = page.locator("//li[contains(text(),'Podpora')]");
    this.profileSummary = page.locator("[data-testid='account-summary']");
    this.profileTitle = page.locator("[data-testid='profile-details-title']");
    this.profileFirstName = page.locator("[data-testid='name']");
    this.profileLastName = page.locator("[data-testid='surname']");
    this.profileEmail = page.locator("[data-testid='email']");
    this.profilePhone = page.locator("[data-testid='phone']");
    this.profileAge = page.locator("[data-testid='age']");
    this.editProfileToggle = page.locator(
      "[data-testid='toggle-edit-profile-button']"
    );
    this.firstNameInput = page.locator("[data-testid='chage-name-input']");
    this.lastNameInput = page.locator("[data-testid='chage-surname-input']");
    this.emailInput = page.locator("[data-testid='chage-email-input']");
    this.phoneInput = page.locator("[data-testid='chage-phone-input']");
    this.ageInput = page.locator("[data-testid='chage-age-input']");
    this.saveButton = page.locator("[data-testid='save-changes-button']");
    this.accountTitle = page.locator("[data-testid='accounts-title']");
    this.accountNumber = page.locator(
      "tr[data-testid='account-row-0'] td[data-testid='account-number']"
    );
    this.accountNumberLabel = page.locator(
      "[data-testid='account-number-heading']"
    );
    this.balance = page.locator(
      "tr[data-testid='account-row-0'] td[data-testid='account-balance']"
    );
    this.balanceLabel = page.locator("[data-testid='account-balance-heading']");
    this.accountType = page.locator(
      "tr[data-testid='account-row-0'] td[data-testid='account-type']"
    );
    this.accountTypeLabel = page.locator(
      "[data-testid='account-type-heading']"
    );
    this.addAccountButton = page.locator("[data-testid='add-account-button']");
    this.footerCopyright = page.locator("footer[class='dashboard-footer']");
  }

  async clickLogout() {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }

  async clickEditProfile() {
    await this.editProfileToggle.click();
    return this;
  }

  async clickSaveButton() {
    await this.saveButton.click();
    return this;
  }
}
