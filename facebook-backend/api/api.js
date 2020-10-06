const Post = require("../model/postSchema");

module.exports = function (params) {
  const api = params.api;

  api.post("/post/new", async (req, res) => {
    const mypost = req.body;
    Post.create(mypost, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  });

  api.get("/post/all", async (req, res) => {
    Post.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    });
  });
};
