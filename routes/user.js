const express = require("express");

const { check, validationResult } = require("express-validator");

const mailjet = require("node-mailjet").connect(
  process.env.mail_api_key,
  process.env.mail_secret_key
);
const router = express.Router();

router.post("/", (req, res) => {
  const user = req.body;

  let checkError = validationResult(req);
  if (!checkError.isEmpty()) {
    let msg = "";
    for (let i = 0; i < checkError.errors.length; i++) {
      msg += checkError.errors[i].msg;
    }

    res.status(401).json({
      msg,
    });
  }

  const request = mailjet
    .post("send", {
      version: "v3.1",
    })
    .request({
      Messages: [
        {
          From: {
            Email: "kukwaclovisngong3@gmail.com",
            Name: "Advanced Tech Academy",
          },
          To: [
            {
              Email: "codingherald@gmail.com",
              Name: "codingherald",
            },
            {
              Email: "kcn.123.com@gmail.com",
              Name: "Kukwa Clovis Ngong",
            },
          ],
          Subject: "Advanced Tech Academy",
          TextPart: `${req.body.message}`,
          HTMLPart: `<h1>Greetings Codingherald</h1> <p>Message from <h4>ADVANCED TECH ACADEMY || CODINGHERALD</h4></p> <p> Message Details</p> <p>Name: ${user.name}</p> <br /> 
               <p>Tel: ${user.tel}</p><br /> 
               <p>Email: ${user.email}</p><br />
               <p>Message: ${user.message}</p>
               <h3><a href="https://advancedtechacademy.onrender.com">visit website</a></h3> <br /> `,
          CustomID: "AppGettingStartedTest",
        },
      ],
    });
  request
    .then((result) => {
      return res.status(201).json({
        name: user.name,
        msg: "message sent successfully",
      });
    })
    .catch((err) => err.statusCode);
});
module.exports = router;
