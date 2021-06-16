import * as Mongo from "mongodb";

async function connectToDB(_url: string): Promise<void> {
  let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

  let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
  await mongoClient.connect();

  let students: Mongo.Collection = mongoClient.db("Test").collection("Students");

  // let s: Student = {name: "Max Mustermann", matrikel: 666};
  // students.insertOne(s);

  let cursor: Mongo.Cursor = students.find({name: "Andreas Reich hallo"});
  let result: Student[] = await cursor.toArray();
  console.log(result);

  let s: Student = await students.findOne({matrikel: 123456});
  console.log(s);
  students.deleteOne({matrikel: 666});
}

connectToDB("mongodb://localhost:27017");

interface Student {
  name: string;
  matrikel: number;
}