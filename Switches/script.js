// switches = can be efficient replacement to many else if statements

let day=1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thurstaday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log(`${day} is not a day.`);
}

let testScore =30;
let letterGrade;

switch(true){
    case testScore >=90:
        letterGrade="A";
        break;

    case testScore >=80:
        letterGrade="B";
        break;
    case testScore >=70:
        letterGrade="B";
        break;
    case testScore >=60:
        letterGrade="B";
        break;
    default:
        letterGrade="F";
}

console.log(letterGrade);