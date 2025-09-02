import { useState } from "react";
import CommentForm from "./CommentForm";

function Comment() {
    const [comment,setComment] = useState([
        {
            username : "ask",
            remark : "ol",
            rating : 2
        }
]);

    let addNewComment = (comment)=>{
        setComment((curComment)=> [...curComment , comment]);
        console.log("comment was added!");
    }
    return(
        <div>
            {
                comment.map((data,index)=>{
                    return <div className="comments" key={index}>
                        <span>{data.username}</span>
                        <br></br>
                        <span>{data.remark}</span>
                        <br></br>
                        <span>{data.rating}</span>
                    </div>
                })
            }
            <br></br>
            <CommentForm addNewComment={addNewComment}/>
        </div>
    )
}
export default Comment;