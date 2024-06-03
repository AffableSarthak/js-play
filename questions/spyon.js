// const spyOn = () => {
//     let timesInvoked = 0
//     const greet =  (name = "jesus") => {
//         timesInvoked++
//         console.log(`hi ${name}`)
//     }

//     greet.timesInvoked = () => console.log(timesInvoked)

//     return greet
// }

const spyOn = (greet) => {
    let timesInvoked = 0
   
    const wrapper = (name) => {
        timesInvoked++
        greet(name)
    }

    wrapper.timesInvoked = () => console.log(timesInvoked)

    return wrapper
}

const greet = (name) => {
    console.log(`hi ${name}`)
}

const greetTwice = spyOn(greet)

greetTwice("david")
greetTwice.timesInvoked() // 1
greetTwice("tom") // hi tom
greetTwice.timesInvoked()// 2
greetTwice("John") // hi John
greetTwice("jenne") // hi jenne
greetTwice.timesInvoked() // 4