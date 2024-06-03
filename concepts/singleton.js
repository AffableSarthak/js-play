class Singleton {
    state = {

        name: "string",
        age: "number"
    }

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            console.log(this)
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
const instance3 = Object.assign({},instance2)
instance3["age"] = 28

console.log(instance2.state)
// console.log(instance3.age)
console.log(Object.is(instance1, instance3)); // Output: true
