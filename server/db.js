const Pool=require('pg').Pool
const pool=new Pool({
    user:'postgres',
    password:'Maks151201',
    host:'localhost',
    port:5432,
    database:'maxtube'
})


module.exports= pool
