import {MongoClient} from "mongodb";

const client = await MongoClient.connect('mongodb+srv://ququrubingbong:<password>@minjun.t3ouqvy.mongodb.net/?retryWrites=true&w=majority&appName=MinJun',{useNewUrlParser:true})
const db = client.db("forum");
db.collection('post').find();