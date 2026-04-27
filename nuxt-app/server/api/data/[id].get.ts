import { connectToDatabase } from "../models/db"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Project ID is required'
    })
  }

  const { client, db } = await connectToDatabase();

  try {
    const collection = db.collection('portfolio_projects')
    const project = await collection.findOne({ id: id })

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
