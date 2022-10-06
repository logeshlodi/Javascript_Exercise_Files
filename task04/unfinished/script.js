var a = 10;
var b = 10;
if (a > b){
    console.log("a is greater than b")
}else if (a == b){
    console.log("a equals b")
}
else {
    console.log("b is greater than a")
}

var numericScore = 76;
var letterGrade = 'A';

if (numericScore < 60){
    letterGrade = 'F';
}else if (numericScore >= 60 && numericScore < 70){
    letterGrade = 'D';
}else if (numericScore >= 70 && numericScore <80){
    letterGrade = 'C';
}else if (numericScore >= 80 && numericScore < 90){
    letterGrade = 'B';
}else {
    letterGrade = 'A'
}
console.log(letterGrade);