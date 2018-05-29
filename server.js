import express from 'express';
import mongodb from 'mongodb';
import assert from 'assert';

const MongoClient = mongodb.MongoClient;


const app = express();
const port = 3000;


MongoClient.connect('mongodb://127.0.0.1:27017/testDB', (err,db) => {
    assert.equal(null, err);
    console.log("Connected to DB")
    
    app.listen(port, err => {
        if (err) throw new Error(err)
        else console.log(`listenning on port ${port}`);
    });
})
