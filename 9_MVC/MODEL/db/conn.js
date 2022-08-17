const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado ao mysql!')
} catch (err){
    console.log('Não foi possível conectar: ',err)
}

module.exports = sequelize