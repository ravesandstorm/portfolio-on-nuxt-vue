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
    const project = await collection.findOne({ id: id }) as Project | null

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
