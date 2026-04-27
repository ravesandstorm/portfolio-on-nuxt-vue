import { connectToDatabase } from "../models/db"

export default defineEventHandler(async (event) => {
  const { collection } = await connectToDatabase();

  try {
    const projects = await collection.find({ "title": { $exists: true } })
                                      .sort({ id: 1 })
                                      .toArray()
    return projects

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load projects'
    })
  }
})
