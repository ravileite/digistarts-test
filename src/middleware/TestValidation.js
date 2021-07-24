const TestValidation = async (req, res, next) => {
    const { n, elements } = req.body

    if (!n) {
        return res.status(400).json({ error: 'Insira a quantidade de elementos' })
    }else if(n < 1 || n > 1000){
        return res.status(400).json({ error: 'A quantidade de elementos (n) deve ser maior igual -1000 e menor igual 1000' })
    }else if (!elements || elements.length != n) {
        return res.status(400).json({ error: 'Insira a quantidade correta de elementos' })
    }else {
        elements.forEach(element => {
            if(element < -1000 || element > 1000){
                return res.status(400).json({ error: 'Cada elemento (k) deve ser maior igual -1000 e menor igual 1000' })
            }
        }) 
        
        next()
    }
}

module.exports = { TestValidation }