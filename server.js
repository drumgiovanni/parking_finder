import express from 'express';
import mongodb from 'mongodb';
import assert from 'assert';
import bodyParser from 'body-parser';

const MongoClient = mongodb.MongoClient;


const app = express();

app.set("port", process.env.PORT || 8000)
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())

MongoClient.connect('mongodb://127.0.0.1:27017/testDB', (err,client) => {
    assert.equal(null, err);
    console.log("Connected to DB");
    const db = client.db('testDB'); 
    const targetNames = [];
    
    app.get('/api/db', (request, response) => {
        console.log(request)
        console.log(response)

        db.collection('alldatas', (error, collection) => {
           
             collection.find().toArray((error, documents) => {
                documents.forEach(targetData => {
                    console.log(targetData.name);
                    targetNames.push(targetData.name);
                }); 
                if (error) response.status(500).send(error)
                else response.status(200).send(targetNames)
            });
        });
    })
    app.listen(app.get("port"), err => {
        if (err) throw new Error(err)
        else console.log(`listenning on port ${app.get("port")}`);
    });

});


