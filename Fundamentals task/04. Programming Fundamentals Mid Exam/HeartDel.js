function solve(input) {
    // parse input
    let houses = input.shift().split('@').map(Number);
    let index = 0;

    // for each remaining element, before 'Love!'
    for (let line of input) {
        if (line == 'Love!') {
            break;
        }

        // - parse command
        let offset = Number(line.split(' ')[1]);

        // - move index
        index += offset;

        // - if index outside array -> index = 0
        if (index >= houses.length) {
            index = 0;
        }

        // - if heart count = 0, print message
        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            // - else decrease heart count and check if heart count = 0
            houses[index] -= 2;
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
    }


    // print result
    console.log(`Cupid's last position was ${index}.`);
    let missed = houses.filter(x => x > 0).length;
    if (missed == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${missed} places.`);
    }
}
solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!'])
// solve([
//     '2@4@2', 'Jump 2',
//     'Jump 2', 'Jump 8',
//     'Jump 3', 'Jump 1',
//     'Love!'
// ])


// function solve(list){
//     let neiborhood = list.shift().split('@').map(Number);
//     let command = list.shift();
 
//     let index = 0;
 
//     while(command !== 'Love!'){
//         let tokens = command.split(' ');
//         let jumpLength = Number(tokens[1]);
 
//         index += jumpLength;
 
//         if(index >= neiborhood.length){
//             index = 0;
//         }
 
//         if(neiborhood[index] === 0){
//             console.log(`Place ${index} already had Valentine's day.`);
//         } else {
//             neiborhood[index] -= 2;
//             if(neiborhood[index] === 0){
//                 console.log(`Place ${index} has Valentine's day.`);
//             }
//         }
 
//         command = list.shift();
//     }
 
//     console.log(`Cupid's last position was ${index}.`);
 
//     let isFailed = false;
//     let failedCount = 0;
 
//     for(let house of neiborhood){
//         if(house !== 0){
//             isFailed = true;
//             failedCount++;
//         }
//     }
 
//     if(!isFailed){
//         console.log(`Mission was successful.`);
//     } else {
//         console.log(`Cupid has failed ${failedCount} places.`);
//     }
    
// }


////////////////////////////////////////////////////////////////////////

// function solve(input = []) {
//     let houses = input.shift().split('@').map(Number);
//     let commands = input.shift();
 
//     let currentIndex = 0;
 
//     while (commands !== 'Love!') {
//       let tokens = commands.split(' ');
//       let jumpLength = +tokens[1];
 
//       currentIndex += jumpLength;
 
//       if (currentIndex >= houses.length) {
//         currentIndex = 0;
//       }
 
//       if (houses[currentIndex] === 0) {
//         console.log(`Place ${currentIndex} already had Valentine's day.`);
//       } else {
//         houses[currentIndex] -= 2;
//         if (houses[currentIndex] === 0) {
//           console.log(`Place ${currentIndex} has Valentine's day.`);
//         }
//       }
 
//       commands = input.shift();
//     }
 
//     console.log(`Cupid's last position was ${currentIndex}.`);
 
//     let isSuccess = true;
//     let count = 0;
 
//     for (const house of houses) {
//       if (house !== 0) {
//         isSuccess = false;
//         count++;
//       }
//     }
 
//     if (isSuccess) {
//       console.log(`Mission was successful.`);
//     } else {
//       console.log(`Cupid has failed ${count} places.`);
//     }
//   }