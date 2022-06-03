const postModel = require('../models/postModel');

module.exports = {
     allposts: (req, res) => {

          postModel.find({}, (err, data) => {
               if (err) return res.status(401)

               if (!data) return res.status(200).json({
                    msg: "no posts"
               })

               return res.status(200).json(data);
          })
     },
     filterPost: (req, res) => {

          postModel.find({}, (err, data) => {
               if (err) return res.status(401)

               if (!data) return res.status(200).json({
                    msg: `no posts`
               })

               let lists = []

               let posts = data.map(post => {
                    if (post.title.includes(req.params.title)) return lists.push(post);

               })

               return res.status(200).json(lists)


          })
     }
}