const express= require('express')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const userRouter=require('./routes/user.routes')
const errorMiddleware=require('./middlewares/error-middleware')
require('dotenv').config()

const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:process.env.URL_CLIENT
}))
app.use('/api', userRouter)
app.use(errorMiddleware)
const PORT=process.env.PORT ||5000
const start= async ()=>{
    try{
        app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
    }
    catch(e)
    {
        console.log(e.message)
    }
}
start()