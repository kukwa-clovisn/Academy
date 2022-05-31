const userModel = require('../models/signupModel');

const capitalizeUserName = require('../middlewares/capitalize');

module.exports = {
     get: (req, res) => {

          /**
           * capitalize user
           * verify the token
           */

          userModel.findOne({
               _id: req.params.id
          }, (err, data) => {
               if (err) {
                    res.status(404).json(err)
                    return console.log(err)
               }
               if (!data) {
                    res.status(200).json({
                         msg: 'no data found',
                         data: []
                    })
                    return console.log('no data found')
               }

               res.status(200).json(data);
               return console.log(data);
          }).select('-password').select('-token')

     },
     post: (req, res) => {
          todoItems = req.body.data;

          userModel.findByIdAndUpdate(req.params.id, {
               todos: todoItems
          }, (err, data) => {
               if (err) {
                    res.status(404).json(err)
                    return console.log(err)
               }

               res.status(200).json(data)
               return console.log("updated user: ", data);
          })
     }
}