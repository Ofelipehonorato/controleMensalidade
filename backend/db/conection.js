const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'controleMensalidde'
})

connection.query('SELECT * FROM Alunos', function(err, results, fields){
  if(err){
    console.error('Erro ao executar a consulta:', err)
    return
  } 

console.log('Alunos', results)

})