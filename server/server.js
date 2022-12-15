var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var dbUrl = 'mongodb+srv://kalyani:user@nodeproject.yenpgbe.mongodb.net/?retryWrites=true&w=majority'

var Product = mongoose.model('products', {
    product:{
        productid: {type:Number},
        category: {type:String},
        price: {type:String},
        name: {type:String},
        instock: {type:Boolean}
    },
    id: {type:Number}
})

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    console.log('MongoDB connection', error)
})

app.get('/products/get',(req,res)=>{
    Product.find({},(error,products)=>{
        res.send(products)
    })
})

app.post('/products/create',(req,res)=>{
    var product = new Product(req.body)
    product.save((error)=>{
        if(error){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
})


app.post('/products/update/:productId',(req,res)=>{
    var productId = req.params.productId || ''
    Product.updateOne({productid:productId}, req.body, (error)=>{
        if(error){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
})

app.post('/products/delete/:productId',(req,res)=>{
    var productId = req.params.productId || ''
    Product.deleteOne({productid: productId}, (error)=>{
        if(error){
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
})

var server = app.listen(3000, () => {
    console.log('Server is listening on the port', server.address().port)
})
