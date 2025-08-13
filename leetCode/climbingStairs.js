let climb = function (n,times) {
    if(n < 0){
        return times;
    }
    if(n === 0){
        return times+1;
    }
    times = climb((n-1),times);
    times = climb((n-2),times);
    return times;
}
console.log(climb(5,0))