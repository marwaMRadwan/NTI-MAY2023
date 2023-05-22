function arrayCreator(count){
    let myArray =[]
    for(let i=0; i<count; i++){
        myArray.push(+prompt("Enter Data to array"))
    }
    return myArray
}
function arrayTotal (myArray){
    let total = 0
    for(let i=0; i<myArray.lenght; i++ ){
        total += myArray[i]
    }
    return total
}
function multiply(myArray){
    let multi=1
    for(i=0; i< myArray.length ; i++){
        multi *=myArray[i]
    }
    return multi
}
const grades = arrayCreator(5)
console.log(grades)
// const gradesTotal= arrayTotal(grades)
// console.log(gradesTotal)
const multi= multiply(grades)
document.write(multi)