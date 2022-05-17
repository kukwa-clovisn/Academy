const path = require('path');


module.exports = {
     devServer: {
          Proxy: {
               '/api': {
                    target: 'http://localhost:9002'
               }
          }
     }
}