import { chromium } from "playwright";
import path from "node:path";

const outDir = process.env.SCREENSHOT_DIR;
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
  document.getElementById("contact").scrollIntoView({ block: "start" });
});
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "m-03b-contact-fixed.png") });

await page.evaluate(() => document.getElementById("process").scrollIntoView({ block: "start" }));
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "m-04-process.png") });

await browser.close();
console.log("DONE");
