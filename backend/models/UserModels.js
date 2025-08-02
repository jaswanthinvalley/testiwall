const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String

})


const TodoSchema = new mongoose.Schema({
    title : String,
    dis : String,
})



const UserModel  = mongoose.model("user",UserSchema)
const TodoModel = mongoose.model("todo",TodoSchema)



module.exports  = {
    UserModel,
    TodoModel
}