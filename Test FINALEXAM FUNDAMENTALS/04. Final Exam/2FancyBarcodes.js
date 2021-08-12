function solve(a) {
    let n = Number(a.shift());
    let barCodePattern = /^(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])(@#+)$/;
    let digits = /\d/g;
    for (let i = 0; i < n; i++) {
        let group = '';
        let barCode = a[i]
        let valid = barCodePattern.test(barCode)
        let match = barCode.match(digits);
        if (match !== null) {
            group = match.join('')
        } else {
            group = '00'
        }
        if (valid) {
            console.log(`Product group: ${group}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}
solve((["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
)
