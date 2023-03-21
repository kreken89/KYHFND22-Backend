const Application = require('../schemas/applicationSchema')
require('dotenv').config()

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

      const today = new Date().toISOString().split('T')[0]
      
      const index = app.usage.findIndex(day => day.date == today)

      if(index < 0) {
        // datumet finns inte i arrayen
        app.usage.push({ date: today, count: 1 })
      } else {
        // datumet finns i arrayen redan
        if(app.usage[index].count >= process.env.API_MAX) {
          // max api anrop är uppnått - AVBRYT
          return res.status(429).json({
            message: 'Max API calls exceeded'
          })
        }

        // Det finns utrymme kvar för fler anrop
        app.usage[index].count++

      }
      Application.updateOne({ _id: app._id }, { usage: app.usage })
        .then(() => {

          next()
        })
        .catch(err => {
          return res.status(500).json({
            message: 'Something went wrong when updating api calls',
            err: err.message
          })
        })

    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when validating the api key',
        err: err.message
      })
    })
}