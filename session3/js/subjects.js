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

const subCount = prompt("subject count")
const subjFullMark = prompt("subject full mark")
const myGrades = getGradesFromUser(subCount)
const sumOfGrades = getTotalGrades(myGrades)
const successAndFailCount = getCountOfSuccessFail(myGrades, subjFullMark)
console.log(successAndFailCount)

