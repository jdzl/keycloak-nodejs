const Keycloak = require('keycloak-connect')
const keycloakConf = require('./keycloak-conf.json')
const session = require('express-session')
const store = new session.MemoryStore()

const sessionConfig = ()=> session({
  secret: 'myFuckingSecret0xff1124',
  resave: false,
  saveUninitialized: true,
  store
})


const keycloak = new Keycloak({ store }, keycloakConf);

module.exports = {
    keycloak,
    sessionConfig
}