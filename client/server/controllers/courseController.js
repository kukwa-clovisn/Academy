const getRequest = (req, res) => {
     console.log(
          'request has been received!'
     )

     let data = {
          name: 'cryptocurrency',
          title: 'The history and emergence of BITCOIN',
          videoUrl: "client\src\assets\videos\How To Buy Cryptocurrency on Binance Mobile (Phone) App.mp4",
          free: true
     }

     return res.json({
          data
     })
}

module.exports = getRequest;