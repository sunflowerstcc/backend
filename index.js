const express = require('express')
const app = express()
const port = 3010
const cors = require('cors')
const mongoose = require('mongoose')
const routerCad = require('./routes/routeCad.js')
const routerFoto = require('./routes/routeFotos.js')

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('./uploads'))

app.use('/login', routerCad)
app.use('/fotos', routerFoto)

mongoose.connect(`mongodb+srv://sunflowers:KnhNYPv3CK9CjFLZ@sunflowers.jli8hs2.mongodb.net/?retryWrites=true&w=majority`)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
