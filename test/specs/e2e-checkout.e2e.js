describe("TC_E2E_001 - Login + Menu Navigation + Add to Cart + Checkout", () => {
    
    // Helper function to open the menu
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

    // Step 1 & 2: Login with valid credentials
    it('should login successfully with valid credentials', async () => {
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

    // Step 3: Open the side menu
    it('should open the side menu', async () => {
        await openMenu();
        
        const allItemsOption = await $("~test-ALL ITEMS");
        await allItemsOption.waitForDisplayed({ timeout: 5000 });
        await expect(allItemsOption).toBeDisplayed();
    });

    // Step 4: Access Webview category
    it('should navigate to Webview screen', async () => {
        const webviewOption = await $("~test-WEBVIEW");
        await webviewOption.waitForDisplayed({ timeout: 5000 });
        await webviewOption.click();
        await browser.pause(2000);
    });

    // Step 5: Go back and access QR Code Scanner
    it('should navigate to QR Code Scanner screen', async () => {
        await goBack(); // Go back from Webview screen
        await openMenu();

        const qrCodeOption = await $("~test-QR CODE SCANNER");
        await qrCodeOption.waitForDisplayed({ timeout: 5000 });
        await qrCodeOption.click();
        await browser.pause(1000);
    });

    // Step 6: Go back and access Geo Location
    it('should navigate to Geo Location screen', async () => {
        await goBack();
        await openMenu();
        
        const geoLocationOption = await $("~test-GEO LOCATION");
        await geoLocationOption.waitForDisplayed({ timeout: 5000 });
        await geoLocationOption.click();
        await browser.pause(1000);
    });

    // Step 7: Go back and access Drawing
    it('should navigate to Drawing screen', async () => {
        await goBack();
        await openMenu();
        
        const drawingOption = await $("~test-DRAWING");
        await drawingOption.waitForDisplayed({ timeout: 2000 });
        await drawingOption.click();
        await browser.pause(1000);
    });

    // Step 8: Go back and access About
    it('should navigate to About screen', async () => {
        await goBack();
        await openMenu();
        
        const aboutOption = await $("~test-ABOUT");
        await aboutOption.waitForDisplayed({ timeout: 2000 });
        await aboutOption.click();
        await browser.pause(1000);
    });

    // Step 9: Go back to All Items
    it('should navigate back to All Items screen', async () => {
        await goBack();
        await openMenu();
        
        const allItemsOption = await $("~test-ALL ITEMS");
        await allItemsOption.waitForDisplayed({ timeout: 2000 });
        await allItemsOption.click();
        
        const productsScreen = await $("~test-PRODUCTS");
        await productsScreen.waitForDisplayed({ timeout: 2000 });
        await expect(productsScreen).toBeDisplayed();
    });

    // Step 10: Add product to cart
    it('should add a product to the cart', async () => {
        const addToCartButton = await $("~test-ADD TO CART");
        await addToCartButton.waitForDisplayed({ timeout: 2000 });
        await addToCartButton.click();
        
        // Validate that the cart shows item
        const cartBadge = await $("~test-Cart");
        await expect(cartBadge).toBeDisplayed();
    });

    // Step 11: Go to cart
    it('should navigate to the cart', async () => {
        const cartButton = await $("~test-Cart");
        await cartButton.waitForDisplayed({ timeout: 2000 });
        await cartButton.click();
        
        const checkoutButton = await $("~test-CHECKOUT");
        await checkoutButton.waitForDisplayed({ timeout: 2000 });
        await expect(checkoutButton).toBeDisplayed();
    });

    // Step 12: Start checkout
    it('should start the checkout process', async () => {
        const checkoutButton = await $("~test-CHECKOUT");
        await checkoutButton.click();
        

        const firstNameField = await $("~test-First Name");
        await firstNameField.waitForDisplayed({ timeout: 2000 });
        await expect(firstNameField).toBeDisplayed();
    });

    // Step 13: Fill information and proceed to review (without finishing)
    it('should fill checkout info and proceed without finishing', async () => {
        const firstNameField = await $("~test-First Name");
        await firstNameField.setValue("Aulus");
        
        const lastNameField = await $("~test-Last Name");
        await lastNameField.setValue("Test");
        
        const zipCodeField = await $("~test-Zip/Postal Code");
        await zipCodeField.setValue("12345");
        

        console.log("Checkout accessed successfully - Purchase NOT completed");
    });
});
