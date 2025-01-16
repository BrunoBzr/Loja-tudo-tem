import express from 'express'
const app = express()
const porta = 5000

app.get('/', function(req, res){
    res.send("Bem vindo a loja")
})

app.listen(porta, function(){
    console.log('Servidor rodando em http://localhost:' + porta)
})