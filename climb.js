const numberOfClimbingWays = (n) => {
    // Number of ways user can climb when only two options are 1 step of 2 steps at a time
    const map = new Map()
    map.set("1", 0)
    map.set("2", 0)
    map.set("12", 0)

    let step1 =1 
    let step2 = 2  

    for (let i =0; i<= n; i++) {
        if(step1 + i <= n) {
            let curr = map.get("1")
            map.set("1", ++curr) 
        }

        if(step2 + i <=n) {
            let curr = map.get("2")
            map.set("2", ++curr) 
        }

        if(step1 + step2 + i <=n) {
            let curr = map.get("12")
            map.set("12", ++curr) 
        }
    }

    const ways = map.get("1") + map.get("2") + map.get("12")
    console.log(ways)
}

// Assuming n = 10
const case1 = 20
numberOfClimbingWays(case1)
