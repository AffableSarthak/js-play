/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romArr = s.split("")
    console.log(romArr)
    const map = new Map()

    // Generic cases
    map.set("I", 1)
    map.set("V", 5)
    map.set("X", 10)
    map.set("L", 50)
    map.set("C", 100)
    map.set("D", 500)
    map.set("M", 1000)

    // special cases
    map.set("IV", 4)
    map.set("IX", 9)
    
    map.set("XL",40)
    map.set("XC", 90)

    map.set("CD", 400)
    map.set("CM", 900)

    let romInt = 0
    for(let i = 0; i< romArr.length;){
        if(i === romArr.length -1) {
            console.log(romArr[i], map.get(romArr[i]))
            romInt += map.get(romArr[i])
            i++;
            continue
        }

        if(romArr[i] === "I"){
            if(romArr[i+1] === "X" || romArr[i+1] === "V"){
                console.log(romArr[i], romArr[i+1])
                console.log(map.get(`${romArr[i]}${romArr[i+1]}`))
                romInt += map.get(`${romArr[i]}${romArr[i+1]}`)
                i+=2;
                continue 
            }
        }
        if(romArr[i] === "X"){
     
            if(romArr[i+1] === "L" || romArr[i+1] === "C"){
                console.log(romArr[i], romArr[i+1])
                console.log(map.get(`${romArr[i]}${romArr[i+1]}`))
                romInt += map.get(`${romArr[i]}${romArr[i+1]}`)
                i+=2;
                continue
            }
        }
        if(romArr[i] === "C"){
          
            if(romArr[i+1] === "D" || romArr[i+1] === "M"){
                console.log(romArr[i], romArr[i+1])
                console.log(map.get(`${romArr[i]}${romArr[i+1]}`))
                romInt += map.get(`${romArr[i]}${romArr[i+1]}`)
                i+=2;
                continue
            }
        }

        console.log(romArr[i], map.get(romArr[i]))
        romInt += map.get(romArr[i])
        i++;
    }

    console.log(romInt)

};

const case1 = "MCMXCIV"
const case2 = "LVIII"
const case3 = "III"
romanToInt(case1)