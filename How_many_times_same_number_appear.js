let arr = [10, 20, 10, 30, 20, 40, 10];

let ans = {};
// object stores key value pair, where key should be unique, if key will same so update the value
for(let i=0;i<arr.length;i++){
    if(ans[arr[i]] == undefined){
        ans[arr[i]] = 1;
    }else {
        ans[arr[i]]++;
    }
}

console.log(ans);

// brut force 

let arr1 = [10, 20, 10, 30, 20, 40, 10];
let visited = [];

for (let i = 0; i < arr.length; i++) {
  if (visited.includes(arr[i])) {
    continue; // skip already counted elements
  }

  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }

  visited.push(arr[i]);
  console.log(arr[i] + " occurs " + count + " times");
}


