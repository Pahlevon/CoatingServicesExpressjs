import express from "express" //ESM
// const express = require("express") //commonjs 
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"
const app = express()


app.get("/hello",helloHandler)
app.get("/state",stateHandler)


console.log("Launching App on Port 3331")
app.listen(3331)