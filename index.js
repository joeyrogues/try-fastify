const fastify = require('fastify')({
  // logger: true
})

const helmet = require('fastify-helmet')

fastify.register(helmet)

const plugins = [
  require('./routes/users/create'),
  require('./routes/users/list')
]
plugins.forEach((plugin) => {
  fastify.register(plugin)
})

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
