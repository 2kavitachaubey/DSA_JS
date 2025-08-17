let clock = "02:07:25PM";
let time = parseInt(clock.substring(0,2));
console.log(time);
let str = clock.substring(clock.length - 2);
console.log(str)
if(str === "AM"){
    if(time===12){
        time = 0;
    }
}else if(str === "PM"){
    if(time!=12){
        time += 12;
    }
}
let newtime;
if(time < 10){
    newtime = "0" + time.toString();
}else{
    newtime = time.toString();
}
let rest = clock.substring(2,clock.length-2);
console.log(newtime + rest)