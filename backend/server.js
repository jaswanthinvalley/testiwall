const express = require('express');
const dotenv = require('dotenv');
const { Db } = require('./Db/Db');
const { UserModel, TodoModel } = require('./models/UserModels');
const { default: mongoose } = require('mongoose');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


Db();

app.get("/", (req, res) => {
  res.send("This is the root endpoint");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ message: "Please enter all the details" });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ message: "Email already exists" });
    }

    const user = await UserModel.create({ name, email, password });
    res.status(201).send({ message: "User created successfully", user });

  } catch (error) {
    console.error("Error in user creation:", error);
    res.status(500).send({ message: "Error in user creation", error: error.message });
  }
});

app.get("/create",async(req,res) => {
  const data = TodoModel.find()
  res.json({data}) 
})
app.post("/create",async(req,res) => 
{
    const{title,dis} = req.body


    if(!title || !dis){
        res.send({message : "please enter all the feilds"})
    }
    await TodoModel.create({
        title : title,
        dis : dis
    })


    .then((result) => res.send("todo added sucessfully : ",result))
    .catch((err) => res.send("error in todo creation : ",err) )

}
)

app.listen(port, () => {
  console.log(` Server is running on port: ${port}`);
});
