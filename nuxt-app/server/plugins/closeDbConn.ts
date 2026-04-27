import { closeDatabaseConnection } from '../api/models/db'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('close', async () => {
        await closeDatabaseConnection()
    })
})