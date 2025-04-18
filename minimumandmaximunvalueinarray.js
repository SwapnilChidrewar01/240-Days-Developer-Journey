let arr = [56, 89, 789, 78, 756, 100];

let length = arr.length;
let min;
let max = 0;
for (let i = 0; i <= length; i++) {
  min = arr[0];
  if (arr[i] > max) {
    max = arr[i];
  } else if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min,max,"hhhh")


// more correct solution 
let arr1 = [56, 89, 789, 78, 756, 100];

let min1 = arr[0];
let max1 = arr[0];

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr1[i];
  }
  if (arr1[i] < min) {
    min = arr1[i];
  }
}

console.log("Min:", min, "Max:", max);
