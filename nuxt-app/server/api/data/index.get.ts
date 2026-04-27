import { connectToDatabase } from "../models/db"
import { Project } from "../../types"

export default defineEventHandler(async (event) => {
  const { collection } = await connectToDatabase();

  try {
    const projects = await collection.find({ "title": { $exists: true } })
                                      .sort({ id: 1 })
                                      .toArray() as Project[]
    return projects

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load projects'
    })
  }
})
