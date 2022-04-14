function solve(a) {
    let old = a.shift();
    let newPass = '';
    let orders = a.shift().split(' ');
    while (orders[0] !== "Done") {
        switch (orders[0]) {
            case "TakeOdd":
                for (let i = 1; i < old.length; i += 2) {
                    newPass += old[i]
                }
                console.log(newPass);
                old = newPass;
                break;
            case "Cut":
                let [order, index, len] = orders;
                let sub = old.substring(Number(index), Number(index) + Number(len));
                old = old.replace(sub, '');
                console.log(old);
                break;
            case "Substitute":
                let [_, word, replacement] = orders;
                if (old.includes(word)) {
                    old = old.split(word).join(replacement);
                    console.log(old);
                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }
        orders = a.shift().split(' ');
    }
    console.log(`Your password is: ${old}`);
}
solve((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

)
