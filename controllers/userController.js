const { validationResult } = require("express-validator");

const mailjet = require("node-mailjet").connect(
  process.env.mail_api_key,
  process.env.mail_secret_key
);
