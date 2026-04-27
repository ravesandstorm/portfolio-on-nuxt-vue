import { Collection, MongoClient } from 'mongodb'

interface Project {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    github: string
    demo: string
    features: string[]
}

let client: MongoClient | null = null
let collection: Collection<Project> | null = null

export async function connectToDatabase() {
    if (client && collection) {
        console.log('Using existing MongoDB client instance')
        return { collection }
    }

    const config = useRuntimeConfig()
    client = new MongoClient(config.mongodb_uri)

    try {
        console.log('Connecting to MongoDB...')
        await client.connect()
        const db = client.db('Project_DBs')
        collection = db.collection('portfolio_projects')
        return { collection }
    } catch (error) {
        console.error('Database connection failed:', error)
        throw createError({
        statusCode: 500,
        statusMessage: 'Failed to connect to database'
        })
    }
}
