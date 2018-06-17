import express from 'express';
import mongodb from 'mongodb';
import assert from 'assert';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
const MongoClient = mongodb.MongoClient;
require('dotenv').config();

const app = express();
console.log(process.env.MONGODB_URI)
app.set("port", process.env.PORT || 8000);
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/icon'));
app.use(express.static(path.join(__dirname, 'client/build')));
MongoClient.connect(process.env.MONGODB_URI, (err,client) => {
    assert.equal(null, err);
    const db = client.db('realDB'); 
    const targetNames = [];

    app.get('/api/db', (request, response) => {
        db.collection('alldatas', (error, collection) => {
             collection.find().toArray((error, documents) => {
                documents.forEach(targetData => {
                    targetNames.push(targetData);
                }); 
                if (error) response.status(500).send(error)
                else response.status(200).send(targetNames)
            });
        });
    })

    app.get('/icon/parking.png', (request, response) => {
        let buf = fs.readFileSync(__dirname +'/icon/parking.png')
        response.send(buf, {'Content-Type': 'image/png'}, 200)
    })
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });
    app.listen(app.get("port"), err => {
        if (err) throw new Error(err)
        else console.log(`listenning on port ${app.get("port")}`);
    });

});


