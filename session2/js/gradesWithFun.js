let countFail = 0, countSucces = 0
const numOfSub = +prompt("number of subjects")
const fullMark = +prompt("Full Mark")
const totalOfAllSubjects = numOfSub*fullMark

function getStudentDegrees (numOfSub, fullMark){
    let singleDegree, sum=0
    for( let i = 0; i < numOfSub; i++ ){
        singleDegree = +prompt("Degree")
        sum += singleDegree
        if( singleDegree < fullMark/2 ) countFail++
        else countSucces++    
    }
    return sum
}

function calcGrade (sum, totalOfAllSubjects){
    let grade = sum / totalOfAllSubjects * 100
    let finalResult
    if(grade >= 90) finalResult = "A"
    else if(grade >= 80) finalResult = "B"
    else if(grade >= 70) finalResult = "C"
    else if(grade >= 60) finalResult = "D"
    else finalResult = "F"
    return finalResult
}

const sum = getStudentDegrees(numOfSub, fullMark)
const result = calcGrade(sum, totalOfAllSubjects)



