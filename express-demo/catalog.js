let { getAll, getById } = require('./model')

function getCatalog(req, res) {
    let products = getAll();
    
   let viewModel = Object.entries(products).map(([id,p]) => ({id,name: p.name}));

    res.render('catalog', {layout: false, products: viewModel});
}

function getDetails(req, res) {
    let id = req.params.productID;
    let product = getById(id);
    res.send(`
    <h1>Product details</h1>
    <a href="/catalog">Back to Catalog</a>
    <h2>${product.name}</h2>
    <p>Price: ${product.price}</p>
    <p>In Stock: ${product.qty}</p>
    `)
}

module.exports = {
    getCatalog,
    getDetails
}