import { chromium } from "playwright";
import path from "node:path";

const outDir = process.env.SCREENSHOT_DIR;
const consoleErrors = [];
const pageErrors = [];

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", (err) => pageErrors.push(err.message));

// ---------- Desktop ----------
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, "d-01-hero.png") });

// Check cascade-layer fix: hover a GlassCard, verify border-color changes
const firstCard = page.locator("#services .glass").first();
await firstCard.hover();
await page.waitForTimeout(400);
const hoverBorderColor = await firstCard.evaluate((el) => getComputedStyle(el).borderColor);
console.log("HOVER_BORDER_COLOR:", hoverBorderColor);
await page.screenshot({ path: path.join(outDir, "d-02-card-hover.png") });

// Process timeline default border (should now be blue-tinted, not white)
await page.evaluate(() => window.scrollTo(0, document.getElementById("process").offsetTop - 100));
await page.waitForTimeout(500);
const timelineDot = page.locator("#process .glass").first();
const dotBorderColor = await timelineDot.evaluate((el) => getComputedStyle(el).borderColor);
console.log("PROCESS_DOT_BORDER_COLOR:", dotBorderColor);
await page.screenshot({ path: path.join(outDir, "d-03-process.png") });

// CTA button hover/active + disabled animation check
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);
const heroCta = page.locator("#home a", { hasText: "Замовити сайт" });
await heroCta.hover();
await page.waitForTimeout(300);
await page.screenshot({ path: path.join(outDir, "d-04-cta-hover.png") });
const ctaAnim = await heroCta.evaluate((el) => getComputedStyle(el).animationName);
console.log("CTA_ANIMATION_NAME:", ctaAnim);

// About / Services / Projects / WhyChooseMe / FAQ / Contact scroll shots
for (const [id, name] of [
  ["about", "d-05-about"],
  ["services", "d-06-services"],
  ["projects", "d-07-projects"],
  ["why-me", "d-08-why-me"],
  ["faq", "d-09-faq"],
  ["contact", "d-10-contact"],
]) {
  await page.evaluate((elId) => {
    const el = document.getElementById(elId);
    el.scrollIntoView({ block: "start" });
  }, id);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, `${name}.png`) });
}

// FAQ accordion interaction
await page.evaluate(() => document.getElementById("faq").scrollIntoView({ block: "start" }));
await page.waitForTimeout(300);
const faqButtons = page.locator("#faq button");
await faqButtons.nth(1).click();
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(outDir, "d-11-faq-open.png") });
const faqAnswerText = await page.locator("#faq").innerText();
console.log("FAQ_HAS_NEW_ANSWER:", faqAnswerText.includes("1 до 3 днів"));

// Phone input behavior test
await page.evaluate(() => document.getElementById("contact").scrollIntoView({ block: "start" }));
await page.waitForTimeout(300);
const phoneInput = page.locator("#phone");
await phoneInput.click();
await phoneInput.type("abc67123abc4567", { delay: 10 });
const phoneValue = await phoneInput.inputValue();
console.log("PHONE_INPUT_VALUE_AFTER_TYPE:", JSON.stringify(phoneValue));
await page.screenshot({ path: path.join(outDir, "d-12-phone-filled.png") });

// try to select-all and delete to see if +380 prefix survives (it's outside input, so should be unaffected)
await phoneInput.press("Control+a");
await phoneInput.press("Backspace");
const phoneValueAfterDelete = await phoneInput.inputValue();
console.log("PHONE_VALUE_AFTER_DELETE_ALL:", JSON.stringify(phoneValueAfterDelete));
const prefixVisible = await page.locator("#contact span", { hasText: "+380" }).count();
console.log("PREFIX_SPAN_COUNT:", prefixVisible);

// Fill full valid form and submit
await page.locator("#name").fill("Тестовий Клієнт");
await phoneInput.fill("");
await phoneInput.type("671234567", { delay: 10 });
await page.locator("#email").fill("client@example.com");
await page.locator("#message").fill("Це тестове повідомлення для перевірки форми зворотного зв'язку.");
await page.screenshot({ path: path.join(outDir, "d-13-form-filled.png") });

const submitBtn = page.locator('#contact button[type="submit"]');
await submitBtn.click();
await page.waitForTimeout(1200);
await page.screenshot({ path: path.join(outDir, "d-14-form-submitted.png") });
const contactSectionText = await page.locator("#contact").innerText();
console.log("FORM_SUCCESS_MESSAGE_SHOWN:", contactSectionText.includes("заявка надіслана"));

// Invalid phone test (e.g. digits starting with invalid operator code "12")
await page.reload({ waitUntil: "networkidle" });
await page.evaluate(() => document.getElementById("contact").scrollIntoView({ block: "start" }));
await page.waitForTimeout(400);
const phoneInput2 = page.locator("#phone");
await phoneInput2.type("123456789", { delay: 10 });
await phoneInput2.blur();
await page.waitForTimeout(300);
const errorVisible = await page.locator("#contact", { hasText: "коректний український номер" }).count();
console.log("INVALID_PHONE_ERROR_SHOWN:", errorVisible > 0);
await page.screenshot({ path: path.join(outDir, "d-15-phone-invalid.png") });

// Navbar logo check
const logoText = await page.locator('header nav > a[href="#home"]').first().innerText();
console.log("NAVBAR_LOGO_TEXT:", JSON.stringify(logoText));

// ---------- Tablet ----------
await page.setViewportSize({ width: 834, height: 1194 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "t-01-hero.png") });
await page.evaluate(() => document.getElementById("services").scrollIntoView({ block: "start" }));
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(outDir, "t-02-services.png") });

// ---------- Mobile ----------
await page.setViewportSize({ width: 390, height: 844 });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "m-01-hero.png") });

const menuButton = page.locator('button[aria-label="Відкрити меню"]');
await menuButton.click();
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(outDir, "m-02-menu.png") });
await menuButton.click();
await page.waitForTimeout(300);

await page.evaluate(() => document.getElementById("contact").scrollIntoView({ block: "start" }));
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(outDir, "m-03-contact.png") });

const mobilePhoneInput = page.locator("#phone");
const inputMode = await mobilePhoneInput.getAttribute("inputmode");
const inputType = await mobilePhoneInput.getAttribute("type");
console.log("MOBILE_PHONE_INPUTMODE:", inputMode, "TYPE:", inputType);

await browser.close();

console.log("CONSOLE_ERRORS:", JSON.stringify(consoleErrors));
console.log("PAGE_ERRORS:", JSON.stringify(pageErrors));
console.log("DONE");
