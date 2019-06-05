const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const DataBase = require('./mongoConection');


const app = express();
app.use( bodyParser.json()); 
app.use(cors());
app.options('*', cors());

DataBase.connect()

app.get('/', (req, res) => res.send('Ho World!'))
app.get('/ttt', (req, res) => res.send('testing'))


app.post('/addUser',async(req, res) => {
    // insert date into the data base
    try{
        await DataBase.db.insertOne(req.body);
    }
    catch(e){
        console.log(e);
    }
    res.status(200);
    res.send('ok');
});

app.post('/CheckUser',async(req, res) => {
    // get the user name if heve
    let currUser = await DataBase.db().findOne({ mail: req.body.mail, password: req.body.password });

    // Check if the user name and mail is in the datbbase
    let userExists = await DataBase.db().find({ mail: req.body.mail, password: req.body.password }).count() > 0;
    if(userExists){
        // retern the name of the user
        res.status(200);
        res.send(currUser.name);
    }
    else{
        res.status(404);
        res.send("not mach");
    }
});

app.get('/all', async(req, res) => {
    let dd = await DataBase.db().find();
    res.send(dd);
    res.status(200);
});

app.listen(7700);

module.exports = app;