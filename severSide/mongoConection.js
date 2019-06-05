const mongo = require('mongodb');

var colection = "";

module.exports =  {
    connect: async function(){
        const url = "mongodb+srv://Aaron:Aa123456@cluster0-bgyka.mongodb.net/test?retryWrites=true&w=majority";
        const conection = await mongo.connect(url);
        const db = conection.db('DoGood');
        colection = db.collection('users');
    },
    db: function() {
        return colection;
    }
}


