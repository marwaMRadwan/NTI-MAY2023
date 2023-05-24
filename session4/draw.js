// const data = [
//     {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 11,
//     title: "vero rerum temporibus dolor",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 12,
//     title: "ipsa repellendus fugit nisi",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 13,
//     title: "et doloremque nulla",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 14,
//     title: "repellendus sunt dolores architecto voluptatum",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 15,
//     title: "ab voluptatum amet voluptas",
//     completed: true
//     }
//     ]
// const dataWrapper = document.querySelector("#dataWrapper")
// let result
// data.forEach( ele => {
    // result = '<div class="col-5 bg-dark text-white p-3 my-2"><h3>'+ ele.title+'</h3><h4>' + ele.completed + '</h4></div>'
//     result = `
//     <div class="col-5 bg-dark text-white p-3 my-2">
//         <h3>
//             ${ele.title}
//         </h3>
//         <h4>
//             ${ele.completed}
//         </h4>
//     </div>`
//     console.log(result)
//     dataWrapper.innerHTML += result
// })

//template string
// const courseName = "JS"
// const str = `hello from 
// ${courseName}
// course`



// const data = [
//     {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 11,
//     title: "vero rerum temporibus dolor",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 12,
//     title: "ipsa repellendus fugit nisi",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 13,
//     title: "et doloremque nulla",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 14,
//     title: "repellendus sunt dolores architecto voluptatum",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 15,
//     title: "ab voluptatum amet voluptas",
//     completed: true
//     }
//     ]
// const dataWrapper = document.querySelector("#dataWrapper")

// const d = document.createElement("p")
// console.log(d)
// dataWrapper.appendChild(d)
// let x = document.createElement("li")
// dataWrapper.appendChild(x)

// data.forEach(ele =>{
//     let div = document.createElement("div")
//     div.classList = "col-5 bg-dark text-white p-3 my-2"
//     dataWrapper.appendChild(div)
//     let h3 = document.createElement("h3")
//     div.appendChild(h3)
//     h3.innerText = ele.title
//     let h4 = document.createElement("h4")
//     div.appendChild(h4)
//     h4.innerText = ele.completed

//     div.addEventListener("click", function(){
//         // alert("hello")
//         div.classList.toggle("bg-primary")
//         div.classList.toggle("bg-dark")
//     })
// })


const inputs = document.querySelector("#inputs")
const add = document.querySelector("#add")

add.addEventListener( "click", function(){
//     <div class="mb-3 col-9">
//     <input class="form-control" placeholder="enter your subject">
// </div>
    const div = document.createElement("div")
    inputs.appendChild(div)
    div.classList = "mb-3 col-9"
    const input = document.createElement("input")
    input.classList = "form-control"
    div.appendChild(input)
    // input.placeholder = "enter your subject"
    input.setAttribute("placeholder", "enter your subject")
    input.setAttribute("type", "number")
})















