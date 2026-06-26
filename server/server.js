import express from "express"
import cors from "cors"
import "dotenv/config"
import multer from "multer"
import connectDB from "./config/db.js"
import routes from "./routes/index.routes.js"
const app = express()
const port = 3000

//middleware
app.use(cors())
app.use(express.json())
app.use(multer().none())

await connectDB()

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})