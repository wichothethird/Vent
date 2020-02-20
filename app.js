//imports
const mysql = require('mysql');
const express = require('express');  



/*
Establishing Connection to mysql database (local Database)
*/
var connection = mysql.createConnection({
    host:'localhost',
    user:'wicho',
    password:'1234',
    database:'webappdatabase'
}); 


connection.connect((err) => {
    if (err) {
      throw err;
      return;
    }
   
    console.log('Connection WORKED!!');
  });



const app = express();
/* 
This get function allows us to create a route for our API (path)
and a call back function


Things to know:
1.This app is an express application object that allowes send get request over an HTTP 
protocol. This will late be change to AJAX.

2. APPLICATION.query(path,callback function);
  callback function - takes a req and a response as paramaters

3. connection is mysql object where we use the method query, which takes on a sql 
query and a call back funtion that returns an error, result and fields. 
*/
app.get('/createTable', (req, res) =>{


    /* INSERT INTO `users` (`id`, `username`, `password`) VALUES ('1', 'wichothethird', '1234'); 
        CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))
    */
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    connection.query(sql,(err,result)=>{
        if (err) {
            throw err;
            return;
        }
        res.send('Table Has been created!!');
    });
    
});

/*Get all the users  */

app.get('/showusers', (req, res) =>{

    let sql = 'SELECT * FROM users';
    connection.query(sql,(err,result)=>{
        if (err) {
            throw err;
            return;
        }
        
        res.send(result);
        console.log(result);
        var string = JSON.stringify(result);
        console.log('>> string: ', string );
        var json =  JSON.parse(string);
        console.log('>> json: ', json);   
        console.log(json[0].username) 
    });
    
});

app.listen(3000);

console.log('Wicho web application');