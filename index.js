const express = require('express')
const app = express()

app.use(express.json())
let books = []

app.post('/books', (req, res ) => {
    // input
    let newTitle = req.body.title
    let newPrice = req.body.price
    let newUnit = req.body.unit
    let newIsbn = req.body.isbn
    let newImgurl= req.body.imgurl
    
    let newBook ={
        title: newTitle,
        price: newPrice,
        unit: newUnit,
        isbn: newIsbn,
        imageurl: newImgurl
        
    }
    let movieID = 0
    
    // process
    const result = moviesConllection.insertOne(newBook)

    // output
    res.status(200).json(BookID)
})

const port = 3000
app.listen(port, () => console.log(`Server started again at ${port}`))