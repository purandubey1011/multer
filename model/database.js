let mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/multer')
    .then(()=>{console.log('database conntected')})
    .catch(err=>console.log(err))