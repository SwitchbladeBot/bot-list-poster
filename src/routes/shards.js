const express = require('express')
const router = express.Router()

const Joi = require('@hapi/joi')

module.exports = (poster) => {
  router.post('/shards', (req, res) => {
    if (req.header('Authorization') !== `Bearer ${process.env.BOT_LIST_POSTER_SECRET}`) {
      res.status(401).json({ error: 'Missing secret' })
      return
    }

    const schema = Joi.array().items({
      id: Joi.number().integer().min(0).max(poster.maxShards - 1).required(),
      guildCount: Joi.number().integer().min(0).required()
    }).unique('id')

    const validation = schema.validate(req.body)
    if (validation.error) {
      res.status(400).json(validation.error)
      return
    }

    // Update shard object if it already exists, or push if it doesn't
    req.body.forEach(shard => {
      const index = poster.shards.findIndex(e => e.id === shard.id)
      if (index === -1) {
        poster.shards.push(shard)
      } else {
        poster.shards[index] = shard
      }
    })

    // Respond with the new shard array
    res.json(poster.shards)
  })

  router.get('/shards', (req, res) => {
    res.json(poster.shards)
  })

  return router
}