import {MongoClient} from "mongodb";

export default async function Home() {
 const client = await MongoClient.connect('mongodb+srv://ququrubingbong:<password>@minjun.t3ouqvy.mongodb.net/?retryWrites=true&w=majority&appName=MinJun',{useNewUrlParser:true})
const db = client.db("forum");
 db.collection('post').find();

  return (
    <div>
       {result[0].title}
       <br></br>
       {result[0].content}
    </div>

  );
}
