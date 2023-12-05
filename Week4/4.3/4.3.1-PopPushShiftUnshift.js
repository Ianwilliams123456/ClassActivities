const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const lastone = nums.pop();
const lasttwo = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
const firstone = nums.shift();
const firsttwo = nums.shift();

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(lasttwo);
nums.push(lastone);
nums.unshift(firsttwo);
nums.unshift(firstone);

console.log(nums);
