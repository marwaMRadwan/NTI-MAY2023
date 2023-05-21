function getStudentTotal ( count ){  //4
    let sum = 0
    for(let i = 0; i < count ; i++)
        sum += +prompt("please enter your student degree") //5 6 7 2
    return sum //20
}

function getStudentStatus ( count , subjectFullMark , tot ){
    if( tot > ( count * subjectFullMark) / 2 ) 
        console.log("Your total is " + tot + " and you Success")
    else   
        console.log("Your total is " + tot + " and you fail")
}

let subCount = prompt("enter number of subjects") //4
let subjectFullMark = prompt("enter subject Full Mark") //10 

let total = getStudentTotal(subCount) //20
getStudentStatus( subCount, subjectFullMark, total )  // (4, 10, 20)

