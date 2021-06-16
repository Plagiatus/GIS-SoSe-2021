"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
async function connectToDB(_url) {
    let options = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    let students = mongoClient.db("Test").collection("Students");
    // let s: Student = {name: "Max Mustermann", matrikel: 666};
    // students.insertOne(s);
    let cursor = students.find({ name: "Andreas Reich hallo" });
    let result = await cursor.toArray();
    console.log(result);
    let s = await students.findOne({ matrikel: 123456 });
    console.log(s);
    students.deleteOne({ matrikel: 666 });
}
connectToDB("mongodb://localhost:27017");
//# sourceMappingURL=dbtest.js.map