class TestController {
    async orderedElements(req, res) {
        let { n, elements } = req.body

        elements = removeDuplicates(n, elements)        
        
        return res.status(200).json({ elements })
    }
}

let removeDuplicates = (n, elements) => {
    let map = {}
    for (let i = 0; i < n; i++){
        map[elements[i]] = elements[i]
    }
    
    let array = Object.values(map)
    return sortArray(array)
}

let sortArray = (elements) => {
    elements.sort(function (x, y){
        if(x > y) return 1
        if(x < y) return -1
        return 0
    })

    return elements
}

module.exports = new TestController()