const { initialize } = require("../utils/puppeteer")



async function scrape_closet(closet = '') {
    const {browser, page} = await initialize();
    await page.goto(`https://poshmark.com/closet/${closet}`);
    await page.setViewport({width: 1080, height: 1024});

    const title = await page.title();

    await browser.close();
    return title;
}





module.exports = {
    scrape_closet
}