let arr = [1,5,7,2,9,3];
for(let i = 0 ; i<arr.length; i++){
    for(let j = i+1 ; j<arr.length; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
let sum = arr[0] + arr[1] + arr[2] + arr[3];
let sum1 =arr[2]+ arr[3] + arr[4] + arr[5];
console.log(sum + " " + sum1);