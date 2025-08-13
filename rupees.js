let rupees = 5821;
let totalNotes = 0;
if(rupees >=500){
    totalNotes = Math.floor(rupees/500);
    rupees %= 500;
    console.log(`total notes of 500 is ${totalNotes}`)
}
if(rupees>= 200){
    totalNotes = Math.floor(rupees/200);
    rupees %=200;
    console.log(`total notes of 200 is ${totalNotes}`)
}
if(rupees>=100){
    totalNotes = Math.floor(rupees/100);
    rupees %=100;
    console.log(`total notes of 100 is ${totalNotes}`)
}
if(rupees>=50){
    totalNotes = Math.floor(rupees/50);
    rupees %=50;
    console.log(`total notes of 50 is ${totalNotes}`)
}
if(rupees>=20){
    totalNotes = Math.floor(rupees/20);
    rupees %=20;
    console.log(`total notes of 20 is ${totalNotes}`)
}
if(rupees>=10){
    totalNotes = Math.floor(rupees/10);
    rupees %=10;
    console.log(`total notes of 10 is ${totalNotes}`)
}
if(rupees>=5){
    totalNotes = Math.floor(rupees/5);
    rupees %=5;
    console.log(`total coins of 5 is ${totalNotes}`)
}
if(rupees>=2){
    totalNotes = Math.floor(rupees/2);
    rupees %=2;
    console.log(`total coins of 2 is ${totalNotes}`)
}
if(rupees>=1){
    totalNotes = Math.floor(rupees/1);
    rupees %=1;
    console.log(`total coins of 1 is ${totalNotes}`)
}
