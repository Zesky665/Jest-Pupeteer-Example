const { TestScheduler } = require("jest");
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const HomePage = require('../main/pages/homepage');
var homePage = new HomePage();
expect.extend({ toMatchImageSnapshot });

const timeout = 50000;

beforeAll(async () => {
    await page.goto(URL, { waitUntil: "domcontentloaded"});
});

describe("Test test tool", () => {
    test("Test is text tool happy path", async () => {

        await homePage.openNewProject(page);

        await homePage.pickTextTool(page);

        await homePage.clickOnCanvas(page);
        
        await homePage.typeText(page, "Test");
        
        await homePage.confirmChange(page);
        
        // get the text content of the new test layer
        const h1Handle = await page.$(".lpibody > .layeritem > .selected > .headL > .label")
        const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle)
    
        expect(html).toBe("Test ");

        // remove adds so they don't interfere with the visual test
        await homePage.removeAds(page);
        
        // wait for the 'font loaded' popup to dissapear
        await page.waitFor(2000)

        // take new screenshot, if there isn't a screenshot stored it will store this one and pass
        const image = await page.screenshot({ fullPage: true });

        await homePage.leaveDialog(page);

        //compare the stored 'correct' schreenshot to the new one, it will fail if they are different
        expect(image).toMatchImageSnapshot();
    }, timeout);
});