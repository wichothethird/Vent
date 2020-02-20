const express = require('express');
const mysql = require('mysql')

/*
 CREATE TABLE ticket(
  ticketNum int AUTO_INCREMENT,
  lastModified DATETIME,
  stat VARCHAR(30),
  dateCreate DATETIME,
  lastModifiedBy VARCHAR(100),
  createdby VARCHAR(100),
  targetPrice DECIMAL(13, 2),
  price DECIMAL(13,2),
  totalInvestment DECIMAL(13, 2),
  image MEDIUMBLOB,
  condit VARCHAR(255),
  description LONGTEXT,
  priority int,
  type VARCHAR(30), 
  admin_id int, 
  product VARCHAR(100),
  service VARCHAR(100),
  profit_percent int,
  category VARCHAR(50),
  issue VARCHAR(255),
  customer_id int,
  PRIMARY KEY (ticketNum)
)
 */

var database = mysql.createConnection({
    host:'localhost',
    user:'wicho',
    password:'1234',
    database:'ventdatabase'
}); 

//Connecting to MySQL Database 
database.connect((err) => {
    if (err) {
      throw err;
      return;
    }
    console.log('Connection WORKED!');
  });






const app = express();
app.use(express.json());

app.use(express.static(__dirname + '/public'));

//This Route is just to create a table for the Ticket Object
app.get('/createTicketObject',(req,res)=>{
  
    let Query = 'CREATE TABLE ticket(ticketNum int AUTO_INCREMENT, lastModified DATETIME, stat VARCHAR(30), dateCreate DATETIME, lastModifiedBy VARCHAR(100), createdby VARCHAR(100), targetPrice DECIMAL(13, 2), price DECIMAL(13,2), totalInvestment DECIMAL(13, 2), image MEDIUMBLOB, condit VARCHAR(255), description LONGTEXT, priority int, type VARCHAR(30),  admin_id int,  product VARCHAR(100), service VARCHAR(100), profit_percent int, category VARCHAR(50), issue VARCHAR(255), customer_id int, PRIMARY KEY (ticketNum))';
    database.query(Query,(err,res,field)=>{
        if (err){throw err; return;}
        console.log("Table has been created!");

    });
    
});
//Send index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'public/index.html');
});


//Post Request 
//data should be recieved in JSON format
app.post('/createTicket',(req,res)=>{

  let ticket = {
    lastModified: req.body.lastModified,
    stat: req.body.stat,
    dateCreate: req.body.dateCreate,
    lastModifiedBy: req.body.lastModifiedBy,
    createdby: req.body.createdby,
    targetPrice: req.body.targetPrice,
    price: req.body.price,
    totalInvestment: req.body.totalInvestment,
    image: req.body.image,
    condit: req.body.condit,
    description: req.body.description,
    priority: req.body.priority,
    type: req.body.type, 
    admin_id: req.body.admin_id, 
    product: req.body.product,
    service: req.body.service,
    profit_percent: req.body.profit_percent,
    category: req.body.category,
    issue: req.body.issue,
    customer_id: req.body.customer_id
  }

  let Query = "INSERT INTO ticket SET ?"
  database.query(Query,ticket,(err,response,field)=>{
  if (err){
    throw err; 
    return;
  }
  console.log("Added the ticket!!");
  res.status(200).send('Ticket has been stored');
  });
  
});

//Get INDIVIDUAL Ticket
app.get('/Tickets/:id', function (req, res) {
  let Query = "SELECT * FROM ticket WHERE ticketNum=?"
  database.query(Query,[req.params.id],(err,response,field)=>{
    if (err){
      throw err; 
      return;
    }
    console.log("Ticket was found!!");
    res.status(200).send(response);
   
    });
})


app.get('/getTicket',(req,res)=>{
  let id = req.body.ticketNum;
  let Query = "SELECT * FROM ticket WHERE ticketNum=?"
  database.query(Query,id,(err,response,field)=>{
  if (err){
    throw err; 
    return;
  }
  console.log("Ticket was found!!");
  console.log(response)
  res.status(200).send(response);
  
 
  });
  
});




//Get ALL Tickets
app.get('/getTickets',(req,res)=>{
  let Query = "SELECT * FROM ticket"
  database.query(Query,(err,response,field)=>{
  if (err){
    throw err; 
    return;
  }
  console.log("Here are all the Tickets!");
  res.status(200).send(response);
 
  });
  
});




app.listen(3000); 