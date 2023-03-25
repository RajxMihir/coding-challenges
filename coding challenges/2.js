let delay = 3000;
let remainingtime = delay;

let countDown = setInterval(() => {
    console.log(`Generating random number in ${remainingtime/1000} seconds...`);
    remainingtime -= 1000;
},1000);