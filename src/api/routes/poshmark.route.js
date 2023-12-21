const {
    get_poshmark_products, scrape_poshmark
} = require('./../controllers/poshmark.controller');



module.exports = function (fastify, opts, done) {
    fastify.get('/poshmark', get_poshmark_products);
    fastify.get('/poshmark/scrape', scrape_poshmark);
    done()
}