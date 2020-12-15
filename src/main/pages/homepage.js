const puppeteer = require('puppeteer');

class HomePage {
    async openNewProject(page) {
        await page.waitForSelector('.theme0 > #cap > span:nth-child(1)')
        await page.click('.theme0 > #cap > span:nth-child(1)')

        await page.waitForSelector('div > div > .topbar > span > button:nth-child(1)')
        await page.click('div > div > .topbar > span > button:nth-child(1)')
        
        await page.waitForSelector('div > .cmanager > .contextpanel > .enab:nth-child(1) > .label')
        await page.click('div > .cmanager > .contextpanel > .enab:nth-child(1) > .label')
        
        await page.waitForSelector('.window > .body > .flexrow > .form > .spread')
        await page.click('.window > .body > .flexrow > .form > .spread')
    }

    async pickTextTool(page) {
        await page.waitForSelector('.flexrow > .sbar > .tools > .toolbtn:nth-child(16) > .gsicon')
        await page.click('.flexrow > .sbar > .tools > .toolbtn:nth-child(16) > .gsicon')
    }

    async clickOnCanvas(page) {
        await page.waitForSelector('.panelblock > .block > div > .pbody > canvas')
        await page.click('.panelblock > .block > div > .pbody > canvas')
    }

    async confirmChange(page) {
        await page.waitForSelector('.toolconf > .body > .fitem:nth-child(7) > .fitem:nth-child(2) > .autoscale')
        await page.click('.toolconf > .body > .fitem:nth-child(7) > .fitem:nth-child(2) > .autoscale')
    }

    async typeText(page, Text) {
        const text = Text.split('');
        for await(const char of text) {
            await page.keyboard.press(char);
        }
    }

    // async getTopLayerText(page) {
    //     const h1Handle = await page.$(".lpibody > .layeritem > .selected > .headL > .label")

    //     const html = await page.evaluate(h1Handle => h1Handle.innerHTML, h1Handle)

    //     return html;
    // }

    async removeAds(page) {
        await page.waitForSelector('body > div.flexrow.app > div:nth-child(2)') 
        await page.evaluate(() => {
            let example = document.querySelector('body > div.flexrow.app > div:nth-child(2)');
            example.parentNode.removeChild(example);
          });
    }

    async leaveDialog(page) {
        page.on('dialog', async dialog => {
            dialog.accept();
        });
    };
}

module.exports = HomePage;