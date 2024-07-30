import { ObjectId } from "mongodb";
import { connectDB } from "@/utils/database";

export default async function Edit() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    return (
        <div className="p-20">
            <h4>수정 페이지</h4>
            <form action="임시" method="POST">
                <input name="title" defaultValue={result.title}></input>
                <input name="content" defaultValue={result.content}></input>
                <input name="content" defaultValue={result._id.toString()} style={{display:'none'}}></input>
                <button type="submit">전송</button>
            </form>
        </div>
    );
}