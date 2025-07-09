const express = require("express");

const app = express();

const port = 4000;

const path = require("path");


app.use(express.static(path.join(__dirname, '/public')))

app.listen(port, ()=>{
    console.log(`Aplicação rodando na porta ${port}`)
})


app.get("/", (req,res)=>{
res.json(
    {
        HelloWord: "Hello Word"
    })
})