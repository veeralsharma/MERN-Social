const mongoose = require('mongoose');
var url = "mongodb+srv://admin-veeral:veeralsh@cluster0-q4ogi.mongodb.net/fbdb?retryWrites=true&w=majority"


mongoose.connect(url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    autoIndex: false,
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))
