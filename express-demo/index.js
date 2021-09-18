let express = require('express');
let handlebars = require('express-handlebars');
let app = express();

app.engine('hbs',handlebars({
    extname:'hbs'
}));
app.set('view engine', 'hbs');

let { getCatalog, getDetails } = require('./catalog');

app.get('/', (req, res) => {
    res.render('index',{layout: false});
})


app.get('/about', (req, res) => {
    res.send(`
    <h1>About me</h1>
    <p>Created using node.js</p>
    <p>IT &copy; 2021</p>

    `)
})

app.get('/catalog', getCatalog)

app.get('/catalog/:productID', getDetails)

app.get('*', (req, res) => {
    res.send(`
    <h1>Error 404 Not Found</h1>
    <h2>The page you requested does not exist</h2>
    `)
})


app.listen(3000);
