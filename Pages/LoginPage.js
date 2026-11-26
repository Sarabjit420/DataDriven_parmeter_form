
class LoginPage {

    constructor(page) {
        this.page = page;

        this.email = page.locator('#input-email');
        this.password = page.locator('#input-password');
        this.loginButton = page.locator('input[type="submit"][value="Login"]');
        this.loginLink = page.locator('a[href*="route=account/login"]');
    }

    async gotoLoginPage() {
        await this.loginLink.click();
        console.log('Login button count:', await this.loginButton.count());
    }

    async enterEmail(username) {
        await this.email.fill(username);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterEmail(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

module.exports = LoginPage;
