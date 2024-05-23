const A = "flower"

const B = "flight"

const diff = (diffMe, diffBy) => diffMe.split(diffBy).join('')

const C = diff(A,B)

console.log(C) // jumps over the lazy dog.