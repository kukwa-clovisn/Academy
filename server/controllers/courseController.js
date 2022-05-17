const courseModel = require('../models/courseModel');


const get = (req, res) => {

     // courseModel.findOne({
     //      id: req.params.courseId
     // }, (err, data) => {
     //      if (err) return res.status(401)

     //      if (!data) return res.status(403).json({
     //           msg: "Course doesn't exist"
     //      })

     //      return res.status(200).json(data)
     // })

     console.log(req.params)

     let data = {
          id: req.params.ida,
          name: 'cryptocurrency',
          title: 'The history and emergence of BITCOIN',
          videoUrl: "How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true
     }

     return res.json(
          data
     )
}

const post = (req, res) => {
     console.log(req.body)

     return res.status(200).json({
          msg: "course uploaded"
     })
}

module.exports = {
     get,
     post
};