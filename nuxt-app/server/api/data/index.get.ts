import { connectToDatabase } from "../models/db"

export default defineEventHandler(async (event) => {
  const { client, db } = await connectToDatabase();

  try {
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
