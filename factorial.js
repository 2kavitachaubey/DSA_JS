function fact(num){
    if(num===0 || num===1){
        return 1;
    }
    console.log(num)
    return num * fact(num-1);
}
console.log(fact(5))