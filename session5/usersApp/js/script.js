// function getMyElement( id ){
//     return document.querySelector(`#${id}`)
// }

//ananymous function 
// const getMyElement = function( id ){
//     return document.querySelector(`#${id}`)
// }

//arrow function
// const getMyElement = ( id ) => {
//     return document.querySelector(`#${id}`)
// }

const getMyElement = id =>  document.querySelector(`#${id}`)

const formElements = ["name", "email", "phone", "gender", "isMarry", "gov"]
const controlForm = getMyElement("controlForm")
const addUser = getMyElement("addUser")
const userData = getMyElement("userData")

const drawData = (user) => {
    const d = `
    <div class="col-3 m-3 p-3 border border-primary-3">
        <h3>Name: ${user.name}</h3>
        <h4>Email: ${user.email}</h4>
        <p>
            Gender: ${user.gender}<br>
            Phone: ${user.phone}<br>
            Is Married: ${user.isMarry}<br>
            Gov: ${user.gov}<br>
        </p>
        <div>
            <button class="btn btn-danger">delete</button>
            <button class="btn btn-warning"> edit</button>
        </div>        
    </div>`
    userData.innerHTML+=d

}

controlForm.addEventListener("click", ()=>{
    addUser.classList.toggle ("d-none")
    controlForm.innerText == "Show Add Form"? 
        controlForm.innerText="Hide Add Form"
        :
        controlForm.innerText="Show Add Form"
})

addUser.addEventListener("submit", (e)=>{
    e.preventDefault()
    const user = { }
    formElements.forEach( el => {
        if(addUser.elements[el].type=="checkbox")
            user[el] = addUser.elements[el].checked ? "Yes": "No"
        else user[el] = addUser.elements[el].value 
    })
    drawData(user)
    addUser.reset()
})













