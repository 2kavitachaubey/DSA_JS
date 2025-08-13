climb = function(n){
    if(n<0){
        return 0 ;
    }
    if(n===0){
        return 1;
    }
    return climb(n-1)+climb(n-2);
}
console.log(climb(8));