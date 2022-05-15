function getPost(req, res) {
     console.log(req.body);

     return res.json(req.body)
}

module.exports = getPost;