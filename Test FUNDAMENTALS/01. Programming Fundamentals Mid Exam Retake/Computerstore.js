function solve(a) {
    let customer = a[a.length - 1];
    let arr = a.map(Number);
    let price = arr.shift();
    let total = 0;
    let finalPrice = 0;
    while (isNaN(price) === false) {
        if (price < 0) {
            console.log(`Invalid price!`);
        } else {
            total += price;
        }
        price = arr.shift();
    }
    let taxes = total * 0.20;
    if (total === 0) {
        console.log(`Invalid order!`);
    } else {
        if (customer === 'special') {
            finalPrice = (total + taxes) * 0.90;
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${total.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${finalPrice.toFixed(2)}$`);
        } else {
            finalPrice = total + taxes;
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${total.toFixed(2)}$`);
            console.log(`Taxes: ${taxes.toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${finalPrice.toFixed(2)}$`);
        }
    }
}
solve([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]
    


)
