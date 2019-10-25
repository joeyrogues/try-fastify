const opts = {
  attachValidation: true,
  schema: {
    body: {
      required: ['user'],
      type: 'object',
      properties: {
        user: {
          required: ['name'],
          type: 'object',
          properties: {
            name: { type: 'string' }
          }
        }
      }
    },

    response: {
      201: {
        type: 'object',
        properties: {
          user: {
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

async function routes (fastify, options) {
  fastify.post('/users', opts, async (request, reply) => {
    if (request.validationError) {
      return reply.code(422).send(request.validationError)
    }
    const user = Object.assign(request.body.user, { id: 1 })
    return reply
      .code(201)
      .send(Object.assign(request.body, { user }))
  })
}

module.exports = routes
