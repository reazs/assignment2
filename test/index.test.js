const { default: AxePuppeteer } = require("@axe-core/puppeteer");
const { toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

describe("weather forecast", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000/index.html");
  });

  it("should pass default axe checks", async () => {
    const results = await new AxePuppeteer(page).analyze();
    expect(results).toHaveNoViolations();
  });
});
