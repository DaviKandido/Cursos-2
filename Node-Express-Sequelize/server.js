const http = require("http");
const port = process.env.PORT || 3000;
const app = require("./app");
const server = http.createServer(app);


app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})