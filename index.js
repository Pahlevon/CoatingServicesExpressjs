import express from "express" //ESM
// const express = require("express") //commonjs 
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"
import { getPlayersHandler} from "./handlers/getPlayers.js"
import { addPlayerHandler } from "./handlers/addPlayer.js"

const app = express()

app.use(express.json()) // middleware to parse json data in request.

//with get we can just read.
app.get("/hello",helloHandler)
app.get("/state",stateHandler)
app.get("/players",getPlayersHandler)

//post method we want to send data.
app.post("/players",addPlayerHandler)


console.log("Launching App on Port 3331")
app.listen(3331)