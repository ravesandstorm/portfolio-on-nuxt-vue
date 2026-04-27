import { Collection, MongoClient } from 'mongodb'
import { Project, About, TechGroup } from '../../types'

let client: MongoClient | null = null
let collection: Collection<Project | About | TechGroup> | null = null

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

export async function closeDatabaseConnection() {
    if (client) {
        try {
            console.log('Closing MongoDB connection...')
            await client.close()
            console.log('MongoDB connection closed')
        } catch (error) {
            console.error('Error closing MongoDB connection:', error)
        } finally {
            client = null
            collection = null
        }
    }
}