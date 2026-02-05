# Mobile Test Automation

> End-to-End (E2E) test automation project for mobile applications using WebdriverIO and JavaScript

## About

This project contains automated E2E tests for Android mobile applications using WebdriverIO, Appium, and JavaScript. The tests cover essential user flows including login validation, menu navigation, cart operations, and checkout processes.

## Technologies

- **[WebdriverIO](https://webdriver.io/)** - Test automation framework
- **[Appium](https://appium.io/)** - Mobile automation server
- **JavaScript (ES6+)** - Programming language
- **Mocha** - Test framework
- **Android SDK** - Android development tools

## Prerequisites

Before running the tests, make sure you have:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Appium](https://appium.io/) installed globally or locally
- [Android Studio](https://developer.android.com/studio) and Android SDK
- Android emulator or physical device connected

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AulusHZP/Automation.git
cd Automation
```

2. Install dependencies:
```bash
npm install
```

3. Verify Appium installation:
```bash
npx appium driver list --installed
```

## Running Tests

### Start Appium Server

In a separate terminal, start the Appium server:
```bash
npx appium --port 4724 --base-path /
```

### Run All Tests

```bash
npm run wdio
```

### Run Specific Test Suite

**Login Tests:**
```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/login.e2e.js
```

**E2E Checkout Tests:**
```bash
npx wdio run ./wdio.conf.js --spec ./test/specs/e2e-checkout.e2e.js
```

## Project Structure

```
Automation/
├── app/
│   └── android/              # Android APK files
├── test/
│   ├── pageobjects/          # Page Object Models
│   │   ├── login.page.js
│   │   ├── page.js
│   │   └── secure.page.js
│   └── specs/                # Test specifications
│       ├── login.e2e.js      # Login validation tests
│       ├── e2e-checkout.e2e.js  # E2E checkout flow tests
│       └── test.e2e.js       # Additional tests
├── wdio.conf.js              # WebdriverIO configuration
└── package.json
```

## Test Cases

### Login Tests (`login.e2e.js`)
- Validates error message with invalid credentials
- Validates successful login with valid credentials

### E2E Checkout Flow (`e2e-checkout.e2e.js`)
- Login with valid credentials
- Navigate through all menu categories (Webview, QR Code, Geo Location, Drawing, About)
- Add product to cart
- Navigate to checkout
- Fill shipping information (without completing purchase)

## Configuration

The test configuration is located in `wdio.conf.js`. Key settings:

```javascript
{
  port: 4724,                    // Appium server port
  capabilities: {
    platformName: 'Android',
    deviceName: 'nightwatch API 31(S)',
    platformVersion: '12',
    automationName: 'UIAutomator2',
    app: './app/android/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'
  }
}
```

## Troubleshooting

### Appium connection issues
Make sure Appium is running on the correct port (4724):
```bash
lsof -i :4724
```

### Device not found
Check connected devices:
```bash
adb devices
```

### Element not found errors
Increase timeout in `wdio.conf.js`:
```javascript
waitforTimeout: 10000
```


