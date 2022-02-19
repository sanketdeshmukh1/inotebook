// require is similar to keywords like import or include in other languages. require takes the name of a package as a string argument and returns a package. 
const express = require('express')
var cors = require('cors')
const connectTOMongo=require('./db');

connectTOMongo(); 
const app = express()
const port = 4000;
// express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());
app.use(cors())
//app.use is use to link routes
app.use('/api/auth',require('./routes/auth') )
app.use('/api/notes',require('./routes/notes') )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})