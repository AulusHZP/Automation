describe("TC_E2E_002 - Geolocation Feature", () => {

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

    it('should navigate to Geolocation screen', async () => {

        // Scroll down in the menu to find Geolocation option
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("GEO LOCATION")');

        const geolocationOption = await $("~test-GEO LOCATION");
        await geolocationOption.waitForDisplayed({ timeout: 10000 });
        await geolocationOption.click();
        await browser.pause(2000);

        // Function to allow location access
        const allowLocation = await $(
        "id:com.android.permissioncontroller:id/permission_allow_foreground_only_button");
        await allowLocation.waitForDisplayed({ timeout: 5000 });
        await allowLocation.click();

        await browser.pause(2000);

        await expect(
        $('//android.widget.TextView[@text="Below you will find the latitude and longitude. You can use Appium to change them with this link."]')).toBeDisplayed();

        console.log("Geolocation screen displayed successfully with location access allowed.");
    });
});
