// const myInput = document.querySelector("#myInput")
// const myBtn = document.querySelector("#myBtn")
// // document.write(myInput.getAttribute("type")+"<br>")
// // document.write(myInput.getAttribute("class")+"<br>")
// // document.write(myInput.getAttribute("id")+"<br>")

// // if( !myInput.getAttribute("type") ){
// //     myInput.setAttribute("type", "number")
// // }

// myBtn.addEventListener("click", function(e){
//     // if(myInput.getAttribute("required")){
//     //     console.log("required")
//     // }
//     // else{
//     //     console.log("not required")
//     // }
//     myInput.toggleAttribute("required")
// })

// const btn = document.querySelector("#button-addon2")
// const myInput = document.querySelector("#myInput")
// const eyeSlash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
// <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
// <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
// <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
// </svg>`
// const eye = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
// <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
// <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
// </svg>`
// btn.addEventListener("click", function(e){
//     const myType = myInput.getAttribute("type")
//     if(myType == "password"){
//         myInput.setAttribute("type", "text")
//         btn.innerHTML = eye 
//         btn.classList="btn btn-primary"
//         myInput.classList="form-control btn btn-outline-primary"
//     } 
//     else{
//         myInput.setAttribute("type", "password") 
//         btn.innerHTML = eyeSlash
//         btn.classList = "btn btn-danger"
//         myInput.classList="form-control btn btn-outline-danger"
//     }
// })
// const myDiv = document.querySelector("#myDiv")
// const myBtn = document.querySelector("#myBtn")
// myBtn.addEventListener("click", function(e){
//     myDiv.remove()
// })

const formFields = [ "fName", "lName"]
const addForm = document.querySelector("#addForm")
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = { }
    // console.log(this)
    // console.log(this.elements.fName.value)
    // formFields.forEach( ( singleFiled )=> {
        // console.log(this)
        // console.log(addForm.elements[singleFiled].value)
    //     data[singleFiled] = addForm.elements[singleFiled].value
    // })
    // console.log(data)
    // data["fName"] = addForm.elements["fName"].value
    // data["lName"] = addForm.elements["lName"].value
    formFields.forEach( ele=> {
        data[ele] = addForm.elements[ele].value
    })
    console.log(data)
})

















