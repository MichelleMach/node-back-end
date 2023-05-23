
const { Router } = require('express');
const routes = Router();
const  User = require('../app/models/User')
const { Aulas } = require('../app/models/Aulas')
const { Pessoas } = require('../app/models/Pessoas')
const { Professores } = require('../app/models/Professores')
const dataBase = require("./database");


routes.get('/', (req, res) => {
    res.json({hello :"world"})
})


routes.post('/', async (req, res) => {
   const {grupo_users} = req.body

   const user = await User.create({grupo_users})
   res.json({user})
})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDb = db.filter(item => {
        if (!item[id]) {
            return item
        }
    })

    db = newDb

    return res.send(newDb)
})

module.exports = routes