console.log(item)

var item
// let i = "whatever"
// const i = "whatever"
// console.log(i)
item = "something"


// buddy()
// let i 
// const buddy = () => {
//     console.log(i)
//     i = "whatever"
// } 

buddy()
function buddy ( ){
//    "use strict"
//    console.log("buddy") 
// num = 5
// console.log(num)
console.log(Number(undefined), Number("   23 "), Number("2z"), Number(null), Number("     "))
console.log(NaN ** 0)
console.log(Object.is({}, {}))
let obj = {
    name: "Same",
    age: 25,
    
}
obj["me"] = obj
console.log(obj.me, "OBJ ME")
}

const arrow = () => console.log(this)
const obj = {
    name: "Sarthak",
    arrowLife(){
        let arrow = () => console.log(this)
        arrow()
    }
}

obj.arrowLife()