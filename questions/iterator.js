const objIterator = (obj) => {
    // console.log(obj, obj.length)
    const iteratorVal = obj.length
    let iteratorCount = 0
    let mainIterator = 1
    return () => {
        if (iteratorCount < iteratorVal) {
            // console.log(iteratorCount, iteratorVal, mainIterator)
            iteratorCount++
            return mainIterator
        }

        if (iteratorCount === iteratorVal) {
            // reset count
            iteratorCount = 0
            return mainIterator+1
        }


    }
}

const case1 = [{ a: 0 }, { b: 0 }, { c: 0 }]
const counter = objIterator(case1)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
