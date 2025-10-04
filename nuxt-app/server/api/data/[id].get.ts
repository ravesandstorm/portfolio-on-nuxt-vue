import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Project ID is required'
    })
  }

  const config = useRuntimeConfig()
  const client = new MongoClient(config.public.mongodb_uri)

  try {
    await client.connect()
    const db = client.db('Project_DBs')
    const collection = db.collection('portfolio_projects')

    const project = await collection.findOne({ id: parseInt(id) })

    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Project not found'
      })
    }

    return project
  } catch (error) {
    console.error('MongoDB error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Database query failed'
    })
  } finally {
    await client.close()
  }
})
