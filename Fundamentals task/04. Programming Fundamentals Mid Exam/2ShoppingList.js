function solve(arr) {
    let list = arr.shift().split('!');
 
    for (const iterator of arr) {
        if (iterator === 'Go Shopping!') {
            return list.join(', ');
        }
 
        let [command, item, newItem] = iterator.split(' ');
        let index = list.indexOf(item);
        switch (command) {
            case 'Urgent':
                !list.includes(item) ? list.unshift(item) : null;
                break;
            case 'Unnecessary':
                list.includes(item) ? list.splice(index, 1) : null;
                break;
            case 'Correct':
                list.includes(item) ? list.splice(index, 1, newItem) : null;
                break;
            case 'Rearrange':
                list.includes(item) ? list.push(list.splice(index, 1)) : null;
                break;
        }
    }
}
console.log(solve(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]))

// function solve(input) {
//     let listWithGrocceries = input.shift().split('!')
 
 
//     for(let element of input) {
//         let tokens = element.split(' ')
//         let command = tokens[0]
//         let item = tokens[1]
 
//         if(command === 'Go') {
//             break;
//         }
 
//         if(command === 'Correct') {
//             let newItem = tokens[2]
//             if(listWithGrocceries.includes(item))
//             listWithGrocceries.splice(listWithGrocceries.indexOf(item),1,newItem)
//         }
 
//         if(command === 'Urgent') {
//             if(!listWithGrocceries.includes(item)) {
//                 listWithGrocceries.unshift(item)
//             }
//         }
 
//         if(command === 'Unnecessary') {
//             if(listWithGrocceries.includes(item)) {
//                 listWithGrocceries.splice(listWithGrocceries.indexOf(item), 1)
//             }
//         }
 
//         if(command === 'Rearrange') {
//             if(listWithGrocceries.includes(item)) {
//                 listWithGrocceries.splice(listWithGrocceries.indexOf(item),1)
//                 listWithGrocceries.push(item)
//             }
 
//         }
//     }
 
//     console.log(listWithGrocceries.join(', '));
// }

/* РЕШЕНИЕ С ФУНКЦИИ */

// function solve(input) {
//     // parse input: take first element and split by '!'
//     let groceries = input.shift().split('!');

//     let line = input.shift();

//     // for every remaining element if element is 'Go Shopping!' end iteration
//     while (line != 'Go Shopping!') {
//         let [command, item, newItem] = line.split(' ');

//         // - execute operation based on element content
//         switch (command) {
//             case 'Urgent':
//                 urgent(groceries, item);
//                 break;
//             case 'Unnecessary':
//                 unnecessary(groceries, item);
//                 break;
//             case 'Correct':
//                 correct(groceries, item, newItem);
//                 break;
//             case 'Rearrange':
//                 rearrange(groceries, item);
//                 break;
//         }

//         line = input.shift();
//     }

//     // print result, joined by ', '
//     console.log(groceries.join(', '));

//     function urgent(list, item) {
//         // -- Urgent -> add item to beginning of list
//         if (list.includes(item) == false) {
//             list.unshift(item);
//         }
//     }

//     function unnecessary(list, item) {
//         // -- Unnecessary -> remove item by name from list
//         if (list.includes(item) == true) {
//             let index = list.indexOf(item);
//             list.splice(index, 1);
//         }
//     }

//     function correct(list, item, newItem) {
//         // -- Correct -> replace item by name in list
//         if (list.includes(item) == true) {
//             let index = list.indexOf(item);
//             list[index] = newItem;
//         }
//     }

//     function rearrange(list, item) {
//         // -- Rearrange -> move item by name to end of list
//         if (list.includes(item) == true) {
//             let index = list.indexOf(item);
//             list.splice(index, 1);
//             list.push(item);
//         }
//     }
// }

solve(['Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);
solve(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);
