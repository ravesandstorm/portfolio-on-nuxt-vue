import { Db, MongoClient } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null

export async function connectToDatabase() {
    if (client && db) {
        console.log('Using existing MongoDB client instance')
        return { client, db }
    }

    const config = useRuntimeConfig()
    client = new MongoClient(config.mongodb_uri)

    try {
        await client.connect()
        db = client.db('Project_DBs')
        return { client, db }
    } catch (error) {
        console.error('Database connection failed:', error)
        throw createError({
        statusCode: 500,
        statusMessage: 'Failed to connect to database'
        })
    }
}