const getRequest = (req, res) => {
     console.log(
          'request has been received!'
     )
     return res.json({
          data: 'this is suppose to be data sent back'
     })
}

module.exports = getRequest;