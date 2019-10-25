const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          users: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                name: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }
}

async function routes (fastify, options) {
  fastify.get('/users', opts, async (request, reply) => {
    return {
      users: [{
        id: 1,
        name: 'joey'
      }]
    }
  })
}

module.exports = routes
