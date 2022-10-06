var a = 10; 
var b = 15;

if (a > b) {
    console.log("a is greater than b");
}else if (a == b) {
    console.log("a is equal to b");
} else { 
    console.log("b is greater than a");
}

var numericScore = 90;
var letterGrade;

if (numericScore < 60){
    letterGrade = 'F';
}else if ((numericScore >= 60) && (numericScore < 70)){
    letterGrade = 'D';
}else if ((numericScore >= 70) && (numericScore < 80)) {
    letterGrade = 'C';
}else if ((numericScore >= 80) && (numericScore < 90)) {
    letterGrade = 'B';
}else{
    letterGrade = 'A';
}

console.log("Letter grade is ", letterGrade);

/*
Other operators :
logical OR: ||
logical not !

*/