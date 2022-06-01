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
               if (err) return res.status(404).json(err);

               if (!data) return res.status(200).json({
                    msg: 'no data found',
                    data: []
               });


               return res.status(200).json(data);

          }).select('-password').select('-token')

     },
     post: (req, res) => {
          todoItems = req.body.data;

          userModel.findByIdAndUpdate(req.params.id, {
               todos: todoItems
          }, (err, data) => {
               if (err) return res.status(404).json(err);

               return res.status(200).json(data)

          })
     },
     user: (req, res) => {
          val = req.body.description;

          userModel.findByIdAndUpdate(req.params.id, {
               description: val
          }, (err, data) => {
               if (err) return res.status(404).json(err);

               return res.status(200).json(data)

          })
     },
     image: (req, res) => {
          val = req.body.image;

          userModel.findByIdAndUpdate(req.params.id, {
               image: val
          }, (err, data) => {
               if (err) return res.status(404).json(err);

               return res.status(200).json(data)

          })
     }
}