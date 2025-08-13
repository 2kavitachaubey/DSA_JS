let a = "1111";
let b = "1010";
while(b.length < a.length){
    b = "0" + b;
}
while (a.length < b.length) {
    a = "0" + a;
}

let carry = 0 ;
let result = '';
for(let i = a.length-1; i>=0; i--){
    aInt = parseInt(a.charAt(i));
    bInt = parseInt(b.charAt(i));
    let sum = aInt + bInt + carry;
    if(sum === 0){
        result = '0' + result;
        carry = 0;
    }else if(sum===1){
        result = '1' + result;
        carry = 0;
    }else if(sum === 2){
        result = '0' + result;
        carry = 1;
    }else if(sum ===3){
        result = '1' + result;
        carry = 1;
    }
}
if(carry === 1){
    result = '1' + result;
}
console.log(result)