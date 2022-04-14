function solve(input) {
    let targets = input.shift().split(" ").map(Number);
    let currentTarget = 0;
    let targetsShot = 0;
    let index = input.shift();
   
    while (index != "End") {
      currentTarget = Number(index);
   
      if (currentTarget <= targets.length - 1) {
        let valueOfCurrent = targets[currentTarget];
        targets[currentTarget] = -1;
        targetsShot++;
   
        // reduce || increase
        for (let i = 0; i < targets.length; i++) {
          let el = targets[i];
   
          if (el !== -1) {
            if (el > valueOfCurrent) {
              targets[i] -= valueOfCurrent;
            } else {
              targets[i] += valueOfCurrent;
            }
          }
        }
      }
      index = input.shift();
    }
    console.log(`Shot targets: ${targetsShot} -> ${targets.join(" ")}`);
  }
solve((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
)