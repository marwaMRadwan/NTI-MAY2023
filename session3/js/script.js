// Object
// let user = "marwa"
// let user = {
//     name: "marwa",
//     age: 38,
//     job: "Developer",
//     address: "october"
// }

// document.write(user.name+ "<br>" + user.age + "<br>" + user.job + user.address)
// console.log(user);

// user["name"]
//for in

// for (let x in user){
//     document.write(x + " - " + user[x] + "<br>")
// }

// array
// let myData = [ "marwa", "developer", 38, "october" ]

// document.write( myData[0] )

// for(let x in myData){
//     document.write( x + " - "+ myData[x] +"<br>" )
// }

// for( let x of myData ){
//     document.write(x)
// }

// for (let i =0; i < myData.length; i++){
//     document.write(myData[i] + "<br>")
// }

// for ( let i = myData.length-1 ; i >= 0 ; i--){
//     document.write(myData[i], "<br>")
// }

// myData.forEach(  function(val, ind, arr){
//     document.write(val + "<br>")
//     document.write(ind + "<br>")
//     document.write(arr + "<br>") 
// } )




let arr = [1,5,2,4,6]

function arrayTotal (myData){
    let sum = 0
    myData.forEach( function(val){
        sum += val
    } )
    return sum
}

document.write( arrayTotal(arr) )

d = []


   



















