import { connectToDatabase } from "../models/db"
import { TechGroup } from "../../types";

export default defineEventHandler(async (event) => {
    const { collection } = await connectToDatabase();

    try {
        const techstack = await collection.find({ "name": { $exists: true } })
                                        .sort({ id: 1 })
                                        .toArray() as TechGroup[]
        return techstack

    } catch (error) {
        throw createError({
        statusCode: 500,
        statusMessage: 'Failed to load tech stack data'
        })
    }
})
