const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.DATABASE_URL


async function Db() {
   try {
     await mongoose.connect(url,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      
   } catch (error) {
      console.log("error in connecting the db",error)
   }
}

   
module.exports = {
   Db
}  