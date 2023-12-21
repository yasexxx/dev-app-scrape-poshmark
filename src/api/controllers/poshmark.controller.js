const { scrape_closet } = require("../services/poshmark.service");


function get_poshmark_products(request, reply) {
    reply.send({ id: '20935239523582528008'});
}

async function scrape_poshmark(request, reply) {
    // console.log(request);
    const closet = 'debstingz'
    const pageTitle = await scrape_closet(closet);
    reply.send({
        result: pageTitle
    })
}

module.exports = {
    get_poshmark_products,
    scrape_poshmark
}