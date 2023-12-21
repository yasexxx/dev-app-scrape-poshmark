const { default: puppeteer } = require("puppeteer");


async function initialize() {
    const browser = await puppeteer.launch( {
        headless: false
    });
    const page = await browser.newPage();
    return { browser, page};
}

module.exports = {
    initialize
}