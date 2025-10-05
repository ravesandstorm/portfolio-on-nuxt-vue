import { MongoClient } from 'mongodb'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const client = new MongoClient(config.public.mongodb_uri)

  try {
    await client.connect()
    const db = client.db('Project_DBs')
    const collection = db.collection('portfolio_projects')
    const projects = await collection.find({}).sort({id: 1}).toArray()
    return projects

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load projects'
    })
  } finally {
    await client.close()
  }
})
