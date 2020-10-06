require('dotenv').config()

var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose")
var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
var cors = require("cors");
app.use(cors());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    next();
})

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'ap2',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  'message': 'hello world'
});

require("./config/database");

const db = mongoose.connection
db.once("open" , () => {
    console.log("DB opened");

    const postCollection = db.collection("posts")
    const changeStream= postCollection.watch()

    changeStream.on("change" , (change) => {
        if(change.operationType === "insert"){
            const postDetails = change.fullDocument
            const dataobject = {
              displayName:postDetails.displayName,
                photoURL:postDetails.photoURL,
                post_image:postDetails.post_image,
                post_message:postDetails.post_message,
                timestamp:postDetails.timestamp
            }
            pusher.trigger("postchange" , "inserted" , dataobject)
        }else{
            console.log("error triggering pusher");
        }
    })

})

var Api = express.Router();
app.use("/", Api);
const params = {
  api: Api
};
require("./api/api")(params);

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

