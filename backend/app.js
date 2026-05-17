import express from 'express'
import { PORT } from './src/config/index.js'
import { connectDB } from './src/config/db.config.js'
import cors from 'cors'

connectDB();

const app = express()
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/test',(req, res)=>{
   res.json({
    success : true,
    message : "Api working successfully"
   })
})

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000')
})