/*
number of subj => input
full mark => input
degree for each sub => inputs 
sum of degrees => output
grade => a, b, c , d, f
count fail subj
count success subj
*/

let sum = 0, grade, countFail = 0, countSucces = 0, singleDegree, finalResult
let numOfSub = +prompt("number of subjects")
let fullMark = +prompt("Full Mark")

for( let i = 0; i < numOfSub; i++ ){
    singleDegree = +prompt("Degree")
    sum += singleDegree
    if( singleDegree < fullMark/2 ) countFail++
    else countSucces++
}
const totalOfAllSubjects = numOfSub*fullMark
grade = sum / totalOfAllSubjects * 100

if(grade >= 90) finalResult = "A"
else if(grade >= 80) finalResult = "B"
else if(grade >= 70) finalResult = "C"
else if(grade >= 60) finalResult = "D"
else finalResult = "F"

document.write("num of subjects "+ numOfSub + "<br>")
document.write("fullMark "+ fullMark + "<br>")
document.write("totalOfAllSubjects "+ totalOfAllSubjects + "<br>")
document.write("num of success "+ countSucces + "<br>")
document.write("num of fail "+ countFail + "<br>")
document.write("sum "+ sum + "<br>")
document.write("Grade "+ grade + "<br>")
document.write("Final "+finalResult)






