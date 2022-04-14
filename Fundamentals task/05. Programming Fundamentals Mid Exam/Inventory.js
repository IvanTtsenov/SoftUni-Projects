function solve(a) {
let arr = a.shift().split(', ')
for(let el of a){
    let token = el.split(' - ');
    let action = token[0];
    let item = token[1];
    let oldItem = 0;
    let newItem = 0;
    if(action === 'Combine Items'){
       let b = item.split(':')
         oldItem = b[0]
         newItem = b[1]
    }
    if(action === 'Craft!'){
        return arr.join(', ')
    }else if(action === 'Collect' && !arr.includes(item)){
        arr.push(item)
    }else if(action === 'Drop' && arr.includes(item)){
        arr.splice(arr.indexOf(item),1)
    }else if(action === 'Combine Items' && arr.includes(oldItem)){
        let index = arr.indexOf(oldItem)
        arr.splice(index + 1,0,newItem)
    }else if(action === 'Renew' && arr.includes(item)){
        arr.splice(arr.indexOf(item),1)
        arr.push(item);
    }
}
}
//console.log(solve([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]))
console.log(solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  ))