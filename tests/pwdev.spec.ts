import { test, expect}  from '@playwright/test';

test ('firstTest', async ({page}) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});
