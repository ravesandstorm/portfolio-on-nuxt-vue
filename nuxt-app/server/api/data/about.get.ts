import { connectToDatabase } from "../models/db"
import { About } from "../../types";

export default defineEventHandler(async (event) => {
    const { collection } = await connectToDatabase();

    try {
        const about = await collection.findOne({ "about_doc": { $exists: true } }) as About
        return about

    } catch (error) {
        throw createError({
        statusCode: 500,
        statusMessage: 'Failed to load about data'
        })
    }
})
