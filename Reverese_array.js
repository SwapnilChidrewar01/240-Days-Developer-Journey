let arr=[100,56,89,90,65,56,89]


for(let i=0;i<=(arr.length-1)/2;i++){
let temp=arr[i];
arr[i]=arr[arr.length-1-i];
arr[arr.length-1-i]=temp;
}

console.log(arr,"reverse")