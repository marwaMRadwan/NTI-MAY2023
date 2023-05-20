// Conditional Statements and operators
//ternery operator

// let grade = prompt("Enter your grade")

// grade >= 50 ? 
// document.writeln("<h3 class='alert alert-success'>Your Grade is " + grade +" you are Success</h3>") : 
// document.writeln("<h3 class='alert alert-danger'>Your Grade is " + grade +" you are Fail</h3>")

//if else
// if( grade >= 50 ){
//     document.writeln("<h3 class='alert alert-success'>Your Grade is " + grade +" you are Success</h3>")
// }
// else {
//     document.writeln("<h3 class='alert alert-danger'>Your Grade is " + grade +" you are Fail</h3>")
// }
//  let a = true

// if( grade > 90 || a != true )
//     document.writeln("<h3 class='alert alert-success'>Your Grade is A </h3>")
// else if (grade > 80 )
//     document.writeln("<h3 class='alert alert-primary'>Your Grade is B</h3>")
// else if( grade > 70 )
//     document.writeln("<h3 class='alert alert-warning'>Your Grade is C </h3>")
// else if ( grade > 60 )
//     document.writeln("<h3 class='alert alert-info'>Your Grade is D </h3>")
// else 
//     document.writeln("<h3 class='alert alert-danger'>Your Grade is F </h3>")


// const val = prompt("please enter a number")

// if(val % 2 == 0 && val % 6 == 0 )
//     document.writeln("<h3 class='alert alert-success'>Div by 2 and 6 </h3>")
// else if(val % 2 == 0 )
//     document.writeln("<h3 class='alert alert-success'>Div by 2 Only</h3>")
// else if(val % 6 == 0 )
//     document.writeln("<h3 class='alert alert-success'>Div by 6 Only</h3>")
// else
//     document.writeln("<h3 class='alert alert-danger'>Not Div by 2 Or 6</h3>")


// const dayNumber = prompt("please enter a number between 0, 6")

// switch(dayNumber){
//     case "0":
//         document.writeln("<h3 class='alert alert-danger'>Sat</h3>")
//         break;
//     case "1":
//         document.writeln("<h3 class='alert alert-danger'>Sun</h3>")
//         break;
//     case "2":
//         document.writeln("<h3 class='alert alert-danger'>Mon</h3>")
//         break;
//     case "3":
//         document.writeln("<h3 class='alert alert-danger'>Tue</h3>")
//         break;
//     case "4":
//         document.writeln("<h3 class='alert alert-danger'>Wed</h3>")
//         break;
//     case "5":
//         document.writeln("<h3 class='alert alert-danger'>Thr</h3>")
//         break;
//     case "6":
//         document.writeln("<h3 class='alert alert-danger'>Fri</h3>")
//         break;
//     default:
//         document.writeln("<h3 class='alert alert-danger'>Error in number</h3>")
// }



//Loops
// for, do while, while , for in, for of, foreach
// let x = 5
// do{
//     document.writeln(x)
//     x--
// }
// while( x > 10 )

// while( x > 10 ){
//     document.writeln(x)
//     x--
// }

// for ( let x = 5; x<10; x++){
//     document.writeln(x)
// }

/*
for ( start ;  condition ;   inc or dec ){
    code
}

start
while(cond){
    code
    inc or dec
}


*/


// let start = 50

// while(start <= 100){
//     document.writeln(start)
//     start+=2
// }

// for(start = 0 ; start <= 10; start += 2){ //0, 2,4,6,8,10,12
//     document.writeln(start)
// }

// console.log(start)

// for(let i = 1; i <= 10; i++){
//     if( i == 5 ) break
//     document.writeln(i)
// }

// for(let i = 1; ; i+=5){
//     if( i > 5 ) break
//     console.log(i)
// }

// for(let i = 0; i<=5; i++){
//     document.write( i + " - this is line from loop <br>")
// }

// let i = 0

// while(i<=5){
//     document.write( i + " - this is line from loop <br>")
//     i++
// }

// let choice = prompt("enter your choice")

// while(choice != 0 ){
//     choice = prompt("enter your choice")
// }

let choice
do{
    choice = prompt("enter your choice")
} while (choice != 0)

// let choice
// for(;;){
//     choice =  prompt("enter your choice")
//     if(choice==0) break
// }











