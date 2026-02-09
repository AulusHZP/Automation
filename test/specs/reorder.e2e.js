describe("TC_E2E_004 - Reorder Feature", () => {

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

        it('should apply filter', async () => {
            const filter =  await $('new UiSelector().className("android.widget.ImageView").instance(4)');
            await filter.waitForDisplayed({ timeout: 10000 });
            await filter.click();
            await browser.pause(1000);
        });

        it('should select "Price (low to high)" filter option', async () => {
            const lowToHighOption = await $('new UiSelector().text("Price (high to low)")');
            await lowToHighOption.waitForDisplayed({ timeout: 10000 });
            await lowToHighOption.click();
            await browser.pause(2000);
        });
});