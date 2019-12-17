const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const { keycloak, sessionConfig } = require('./keycloak');

const PORT = process.env.PORT || 3000

let app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(sessionConfig())
app.use(keycloak.middleware())

app.get('/', (req, res) => res.json({ response: 'API testig running' }))
app.use('/users', routes)


const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// module.exports = server