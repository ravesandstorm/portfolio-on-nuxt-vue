import { connectToDatabase } from "../models/db"
import { Project } from "../../types"

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Project ID is required'
    })
  }

  const { collection } = await connectToDatabase();

  try {
    // Filter by existence of title field and ensure id is a integer! (db schema)
    const project = await collection.findOne({ 'title': { $exists: true }, id: parseInt(id) })

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
  }
})
