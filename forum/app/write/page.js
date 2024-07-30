export default function Write() {
    return (
        <div classname="p-20">
            <h4>글 작성</h4>
            <form action="/api./post/new" method="POST">
              <input name="title" placeholder="글 제목"></input>
              <input name="title" placeholder="글 제목"></input>
              <button type="submit">제출</button>
            </form>
        </div>
    );
}