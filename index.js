import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config();

const app = express()
const PORT = 8500
app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`)
})