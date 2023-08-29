const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Vai Romarinho')
})

app.listen(3333, () => {
    console.log('Nego, eu juro que eu nunca enjoaria')
})