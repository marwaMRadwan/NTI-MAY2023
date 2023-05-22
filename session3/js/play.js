let arr = []
let total = 0;
const numb = +prompt("Enter the numb") //2

for (i = 0; i < numb; i++){
    
    const mat = +prompt("Enter the mat")  //20  50
    arr.push(mat) // [20]   [20, 50]
    total += arr[i] // 20   70
}

for (i = 0; i < arr.length; i++){
 
}

document.write(total)