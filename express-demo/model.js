let fs = require('fs');

let productsAsString = fs.readFileSync('./data.json','utf-8');
let products = JSON.parse(productsAsString);

function getAll() {
    return products;
}

function getById(id) {
    return products[id];
}

module.exports = {
    getAll,
    getById
}