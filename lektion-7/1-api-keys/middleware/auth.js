const Application = require('../schemas/applicationSchema')

exports.validateApiKey = (req, res, next) => {
  
  // const api_key = req.headers.x-api-key
  const api_key = req.query.api_key
  const origin = req.headers.origin

  Application.findOne({ api_key })
    .then(app => {

      if(!app) {
        return res.status(404).json({
          message: 'Could not find api_key'
        })
      }

      if(app.host !== origin) {
        return res.status(403).json({
          message: 'Forbidden, The api key does not match the origin'
        })
      }

      next()

    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when validating the api key',
        err: err.message
      })
    })
}