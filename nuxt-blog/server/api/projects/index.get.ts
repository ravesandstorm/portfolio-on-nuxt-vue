import { readFile } from 'fs/promises'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const projects = []
    
    // Load all project files
    for (let i = 1; i <= 10; i++) {
      try {
        const filePath = join(process.cwd(), 'public', 'projects', `${i}.json`)
        const fileContent = await readFile(filePath, 'utf-8')
        const project = JSON.parse(fileContent)
        projects.push(project)
      } catch (error) {
        // Skip if file doesn't exist
        console.warn(`Project ${i}.json not found`)
      }
    }
    
    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load projects'
    })
  }
})
