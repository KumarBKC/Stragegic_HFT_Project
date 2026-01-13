const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://tms32.nepsetms.com.np/');
  console.log("✅ Page loaded");

  // Try grabbing the page title as a test
  const title = await page.title();
  console.log("🔎 Page title:", title);

  await browser.close();
})();
