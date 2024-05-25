import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectToMongoDB from'./db.js'
import bookRoute from './route/book_route.js'
import userRoute from './route/user_route.js'
const app = express()   
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

connectToMongoDB(URI);

app.use(express.json())

app.use('/books' , bookRoute);
app.use('/user' , userRoute);

app.listen(PORT , ()=>{
    console.log(`server started at port ${PORT}`)
})