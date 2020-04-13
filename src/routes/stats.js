const express = require('express')
const router = express.Router()

const Joi = require('@hapi/joi')

module.exports = () => {
  router.post('/shards', (req, res) => {
    if (req.header('Authorization') !== `Bearer ${process.env.BOT_LIST_POSTER_SECRET}`) {
      res.status(401).json({ error: 'Missing secret' })
      return
    }

    const schema = Joi.array().items({
      id: Joi.number().integer().min(0).max(parseInt(process.env.MAX_SHARDS) - 1).required(),
      guildCount: Joi.number().integer().min(0).required()
    }).unique('id')

    // TODO: Store new guildCount values to later send to the bot lists

    res.json(schema.validate(req.body))
  })

  router.get('/shards', (req, res) => {
    res.json(this.poster.shards)
  })

  return router
}