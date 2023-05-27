const addForm = document.querySelector("#addForm")

const errors = { } 

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const name = addForm.elements.name.value.trim()
    if(!name.length) errors.name = "name is empty"
    else if( name.length < 3 || name.length >10 ) errors.name="name must be between 3 and 10 characters"
    else {
        errors.name=""
        addForm.elements.name.nextElementSibling.innerText=""
        addForm.elements.name.nextElementSibling.classList.add("d-none")
    }
    if(errors.name) {
        console.log(addForm.elements.name.nextElementSibling)
        addForm.elements.name.nextElementSibling.innerText = errors.name
        addForm.elements.name.nextElementSibling.classList.remove("d-none")
    }

    const phone = addForm.elements.phone.value.trim()
    if(!phone.length) errors.phone = "phone is empty"
    else if( isNaN(phone) ) errors.phone = "must contain numbers only"
    else if( phone.length != 11 ) errors.phone="phone must be 11 chars"
    else if( 
        !phone.startsWith("011") && 
        !phone.startsWith("012") &&
        !phone.startsWith("015") &&
        !phone.startsWith("010") 
        ){
            errors.phone = "phone must start with 011, 012, 015, 010"
        }
    
    else {
        errors.phone=""
        addForm.elements.phone.nextElementSibling.innerText=""
        addForm.elements.phone.nextElementSibling.classList.add("d-none")
    }
    if(errors.phone) {
        console.log(addForm.elements.phone.nextElementSibling)
        addForm.elements.phone.nextElementSibling.innerText = errors.phone
        addForm.elements.phone.nextElementSibling.classList.remove("d-none")
    }

    const email = addForm.elements.email.value.trim()
    //email contain @ , . , first(char)
    if(!email.length) errors.email = "email is empty"
    else if( !isNaN(email[0]) ) errors.email = "must start with char"
    else if( !email.includes("@") || !email.includes(".")  ){
            errors.email = "email must contain @ or ."
    }
    else if( 
        email.lastIndexOf(".") < email.indexOf("@")||
        email.lastIndexOf(".") == email.length-1 ||  // email[-1]
        email.lastIndexOf(".") == email.indexOf("@")+1 ||
        email[0] !="@"
    )
        errors.email = "invalid email"
    else {
        errors.email=""
        addForm.elements.email.nextElementSibling.innerText=""
        addForm.elements.email.nextElementSibling.classList.add("d-none")
    }
    if(errors.email) {
        console.log(addForm.elements.email.nextElementSibling)
        addForm.elements.email.nextElementSibling.innerText = errors.email
        addForm.elements.email.nextElementSibling.classList.remove("d-none")
    }



    // if( !name.length ){ // name.length == 0 
    //     errors.name ="name is empty"
    // }
    // else{ 
    //     console.log("not empty")
    // }
    // console.log(str1.startsWith('011'));

})