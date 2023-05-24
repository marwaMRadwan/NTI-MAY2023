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
    arr.forEach( function(a) {  // for(i=0; i< arr.length; i++)
        if(a>=fullMark/2)  s++   // if(arr[i]> = fullmark/2) s++
        else f++ 
    })
    //s =4  f= 3
    let result = {
        success : s,
        fail: f
    }   //{ success: 4, fail:3}
    return result
}

const grades = arrayCreator(3)
console.log(grades)

const gradesTotal = arrayTotal(grades)
console.log(gradesTotal)

const res = getStudentSAndF(grades, 50)







