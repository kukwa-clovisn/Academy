const express = require("express");

const router = express.Router();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.question,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.status(200).json({
      data: response.data.choices[0].text,
      msg: "chatgpt working good mehn",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
