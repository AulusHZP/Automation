describe("Login Functionality on Mobile App", () => {
    
    it('should show error message with invalid credentials', async () => {
        await $("~test-Username").click();
        await $("~test-Username").setValue("aulus test");
        
        await $("~test-Password").click();
        await $("~test-Password").setValue("aulus123");
        
        await $("~test-LOGIN").click();
        
        // Validate unsuccessful login
        const errorMessage = await $('//android.widget.TextView[@text="Username and password do not match any user in this service."]');
        await expect(errorMessage).toHaveText("Username and password do not match any user in this service.");

        console.log("Error message validated successfully");
    });

    it('should login successfully with valid credentials', async () => {
        await $("~test-Username").click();
        await $("~test-Username").setValue("standard_user");

        await $("~test-Password").click();
        await $("~test-Password").setValue("secret_sauce");

        await $("~test-LOGIN").click();
        
        // Validate successful login
        const productsScreen = await $("~test-PRODUCTS");
        await expect(productsScreen).toBeDisplayed();

        console.log("Login successful");

    });
});