function getGradesFromUser(subCount){
    const grades = []
    for(let i=0; i<subCount; i++)
        grades.push( +prompt("subject grade") )
    return grades
}

function getTotalGrades(grades){
    let sum = 0
    grades.forEach( function(grade){
        sum+=grade
    })
    return sum
}

function getCountOfSuccessFail (grades , fullMark ){
    let successCount=0, failCount=0
    grades.forEach( function( grade ){
        if(grade >= fullMark/2) successCount++
        else failCount++
    } )
    return {
        successCount: successCount,
        failCount : failCount
    }
}

function getFinalGrade (failureCount, studentTotal, fullMarks){
    if( failureCount > 0 ) return "You Got F"
    let result
    const studentRate = studentTotal/fullMarks*100
    if(studentRate>85) result = "A"
    else if(studentRate>75) result ="B"
    else if(studentRate>65) result = "C"
    else if(studentRate>50) result = "D"
    else result = "F"
    return result
}

const subCount = prompt("subject count")
const subjFullMark = prompt("subject full mark")
const myGrades = getGradesFromUser(subCount)
const sumOfGrades = getTotalGrades(myGrades)
const successAndFailCount = getCountOfSuccessFail(myGrades, subjFullMark)

const result = getFinalGrade(
    successAndFailCount.failCount,
    sumOfGrades,
    subCount*subjFullMark
    )
document.write(result)





