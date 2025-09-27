import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Project ID is required'
    })
  }
  
  try {
    const filePath = join(process.cwd(), 'public', 'projects', `${id}.json`)
    const fileContent = await readFile(filePath, 'utf-8')
    const project = JSON.parse(fileContent)
    
    return project
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Project not found'
    })
  }
})
