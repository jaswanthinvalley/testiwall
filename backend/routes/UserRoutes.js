const express = require('express')
const app = express()
const UserRoutes = () => {

    app.get('/',(req,res)=> res.json({
        "mesaage" : "you are in the main route"
    }) )

}


module.exports = {
    UserRoutes
}