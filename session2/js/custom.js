// users calc bmi

// function userBmi ( ) {
//     const w = prompt("please enter your w")
//     const h = prompt("please enter your h")
//     const bmi = w / (h**2)
//     return bmi
// }

// function isGreat (value1, value2){
//     if( value1 > value2 ) 
//         console.log("one greater than 2 "+ value1 + " > " + value2)
//     else if( value2 > value1 ) 
//         console.log( "two greater than one " + value2 + " > " + value1 )
//     else 
//         console.log("one and two is the same " + value1 + " = " + value2)    
// }

// let bmi1 = userBmi()
// let bmi2 = userBmi()
// isGreat(bmi1, bmi2)

// inputs , outputs, operations
/*
2 input for 2 numbers 
1 output result
1 operation +
naming =>  adding , add, sum , total 
*/

// function add( x, y ){
//     return x + y
// }

// console.log( add( 5 ,3 ) );

// student  4 sub => degree total 
// if total> 50 success else fail

/*
get student degree => 4 times //loop
get degrees total => +
check degrees suc, fal //cond.
*/
function getStudentTotal ( count  ){
    let sum = 0
    for(let i = 0; i < count ; i++)
        sum += +prompt("please enter your student degree")
    return sum
}
function getStudentStatus ( count , subjectFullMark , sum ){
    // let sum = 0
    // for(let i = 0; i < count ; i++)
    //     sum += +prompt("please enter your student degree")
    if( sum > ( count * subjectFullMark) / 2 ) console.log("Your total is " + sum + " and you Success")
    else console.log("Your total is " + sum + " and you fail")
}

let subCount = prompt("enter number of subjects")
let subjectFullMark = prompt("enter subject Full Mark")
let total = getStudentTotal(subCount)
getStudentStatus( subCount, subjectFullMark, total )























