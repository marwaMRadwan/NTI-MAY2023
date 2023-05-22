function arrayCreator ( count ){
    let myArray = []
    // let i =0
    // while(i<count){
    //     input = prompt("ya user d5ly data")
    //     myArray.push(input)
    //     i++
    // }
    for(let i =0; i< count; i++)
        myArray.push( +prompt("ya user d5ly data") )
    return myArray
}

function arrayTotal (arr) {
    let total = 0
    // arr.forEach ( function(el){
    //     total += el
    // })
    for(let i=0; i<arr.length; i++)
        total += arr[i]
    return total
}

function getStudentSAndF( arr, fullMark ){
    let s=0, f=0
    arr.forEach( a => {
        if(a>=fullMark/2)  s++
        else f++
    })
    let result = {
        success : s,
        fail: f
    }
    return result
}

const grades = arrayCreator(3)
console.log(grades)

const gradesTotal = arrayTotal(grades)
console.log(gradesTotal)

const res = getStudentSAndF(grades, 50)







