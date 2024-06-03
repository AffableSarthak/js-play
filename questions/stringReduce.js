const reduceString = () => {
    const strs = ["flower", "flow", "flight"]

    strs.reduce((prev, curr) => {
        console.log(prev, curr)
    }) 

}

reduceString()