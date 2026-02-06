describe("TC_E2E_003 - Webview Feature", () => {

    // Helper function
    async function openMenu() {
        const menuButton = await $("~test-Menu");
        await menuButton.waitForDisplayed({ timeout: 10000 });
        await menuButton.click();
        await browser.pause(1000);
    }

    async function goBack() {
        await driver.back();
        await browser.pause(1000);
    }

    async function ensureLoggedOut() {
        try {
            const menuButton = await $("~test-Menu");
            if (await menuButton.isDisplayed()) {
                await menuButton.click();
                await browser.pause(1000);
                const logoutButton = await $("~test-LOGOUT");
                await logoutButton.click();
                await browser.pause(2000);
            }
        } catch (e) {
            // Already logged out
        }
    }

    it('should login successfully with valid credentials', async () => {
        await ensureLoggedOut();
        
        const usernameField = await $("~test-Username");
        await usernameField.waitForDisplayed({ timeout: 10000 });
        await usernameField.click();
        await usernameField.setValue("standard_user");

        const passwordField = await $("~test-Password");
        await passwordField.click();
        await passwordField.setValue("secret_sauce");

        const loginButton = await $("~test-LOGIN");
        await loginButton.click();

        const productsScreen = await $("~test-PRODUCTS");
        await productsScreen.waitForDisplayed({ timeout: 10000 });
        await expect(productsScreen).toBeDisplayed();
    });

    it('should open the side menu', async () => {
        await openMenu();
        const allItemsOption = await $("~test-ALL ITEMS");
        await allItemsOption.waitForDisplayed({ timeout: 5000 });
        await expect(allItemsOption).toBeDisplayed();
    });

    it('should navigate to Webview screen', async () => {
        const webviewOption = await $("~test-WEBVIEW");
        await webviewOption.waitForDisplayed({ timeout: 5000 });
        await webviewOption.click();
        await browser.pause(2000);

        await $("~test-enter a https url here...").waitForDisplayed({ timeout: 5000 });
        await $("~test-enter a https url here...").click();
        await $("~test-enter a https url here...").setValue("https://aulushzp.vercel.app");

        await $("~test-GO TO SITE").waitForDisplayed({ timeout: 5000 });
        await $("~test-GO TO SITE").click();

        console.log("Webview screen displayed successfully with the specified URL.");

    });
});