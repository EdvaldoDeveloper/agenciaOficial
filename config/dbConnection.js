var mysql = require('mysql');

var comMySQL = () => {
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: '',
        user: '',
        password: '',
        database: ''
    });
    
}
module.exports = () => {
    // console.log('O autoload carregou o modulo de conexão com bd');
    return comMySQL;

}