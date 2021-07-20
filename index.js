

const fs = require("fs")
//console.log(http.METHODS)
//console.log(http.STATUS_CODES)
const express = require("express")
const app=express()
const PORT=3000

//bodyparser
const bodyParser = require("body-parser")
app.use(bodyParser.json())



//Express middlewares


//Home route
app.get('/home', (req, res) => {
  return res.json({
    Home: 'Home',
  })
})

//Movie route
app.get('/movie', (req, res) => {
  return res.json({
    Movie: 'Movie',
  })
})

//Cricket route
app.get('/cricket', (req, res) => {
  return res.json({
    Cricket: 'Cricket',
  })
})

//Update 
app.put('/update', (req, res) => {
    
    var user=req.body
    var updatedData=JSON.stringify(user)
   fs.writeFile("file.txt", updatedData,(err)=>{
       if(!err){
           console.log("file created")
       }
   })
    res.send(user)
})

///404 page

app.get('*', (req, res) => {
    res.status(404).send('Page not Found!')
  })

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
