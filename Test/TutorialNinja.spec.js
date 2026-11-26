//..........npx playwright test Test/TutorialNinja.spec.js......


const { test, expect } = require('@playwright/test');

const LoginPage = require('../Pages/LoginPage');

const loginData = require('../Test_data/LoginData');

loginData.filter(data=> data.role ==='Admin')
    .forEach((data)=>
    {

    

test(`Tutorial Ninja Login E2E Test ${data.username}`,async ({ page }) => {

    // Open Tutorial Ninja website
    await page.goto(
        'https://tutorialsninja.com/demo/index.php?route=common/home'
    );

    // Navigate to Login page
    await page.getByTitle('My Account').click();

    await page.getByRole('link', { name: 'Login' }).click();

    // Create LoginPage object
    const loginPage = new LoginPage(page);


    // Login

    await loginPage.login(data.username, data.password);


 

    // Verify successful login
    await expect(page).toHaveURL(/account/);

});

});

 
