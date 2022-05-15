const adminModel = require('../models/adminModel');

const capitalizeName = require('../middlewares/capitalize');
const verifyToken = require('../middlewares/verifyHash')
const hashFunc = require('../middlewares/hash');

module.exports = {
     add: async (req, res) => {
          try {
               let adminName = capitalizeName(req.body.username);
               let hashkey = await hashFunc(req.body.password)

               const admin = {
                    username: adminName,
                    email: req.body.email,
                    password: hashkey,
                    admin: true
               }

               // await adminModel.create(admin);
               //  res.json(admin);

          } catch (err) {
               console.log(err)
          }


     },
     auth: (req, res) => {

          let adminName = capitalizeName(req.body.username);

          adminModel.findOne({
               "username": adminName
          }, async (err, data) => {
               if (err) return res.status(401);

               if (!data) return res.status(403);

               if (data.email !== req.body.email) return res.status(403);

               let response = await verifyToken(req.body.password, data.password, adminName);

               if (!response) return res.status(403);

               return res.status(200).json({
                    id: data._id,
                    username: data.username,
                    email: data.email,
                    admin: data.admin
               })

          })
     },
     blog: (req, res) => {
          console.log(req.body);
          return res.json(req.body);
     },
     course: (req, res) => {
          console.log(req.body)
          return res.json(req.body)
     }
}