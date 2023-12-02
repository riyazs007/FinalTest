import express from 'express'
import connection from './database/db'
import cors from 'cors'

const app=express()
const PORT=6000
app.listen(PORT,()=>console.log("Server is Running"))

connection()
app.use(express.json())
app.use(cors())