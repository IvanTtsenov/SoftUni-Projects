function solve(a) {
  let b = a.map(Number)
  let n = b.shift();
  let lectures = b.shift();
  let bonus = b.shift();
  let arr = [];
  let result = 0;
  let total = 0;
  for (let el of b) {
    total = el / lectures * (5 + bonus);
    arr.push(total)
    result = Math.max(...arr)
  }
  console.log(`Max Bonus: ${Math.ceil(result)}.`);
  console.log(`The student has attended ${Math.max(...b)} lectures.`);
}
solve([
  '5', '25', '30',
  '12', '19', '24',
  '16', '20'
]
)
solve([
  '10', '30', '14', '8',
  '23', '27', '28', '15',
  '17', '25', '26', '5',
  '18'
]
)

      //{total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})