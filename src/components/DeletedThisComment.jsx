import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../websiteAPI.js";
import { deleteComment } from "../../websiteAPI.js";
import ShowPostedComment from "./ShowPostedComment.jsx";

const DeletedThisComment= ({username, comment}) => {
    const [errorCatch, setErrorCatch] = useState(false)
    const [checkDelCom, setDelCom] = useState('')
    const [isLoading, setLoading] = useState(false);
    const commentid = comment.comment_id

    const submitHandler = (e) =>{
        setLoading(true);
        e.preventDefault();
        deleteComment(commentid)
        .then((response)=>{
            setLoading(false)
            setDelCom('Your Comment was Deleted!')
        })
        .catch((err)=>{
            setErrorCatch('Comment was not deleted, please try again!')
        })
    }

    if (isLoading) {
        return (
          <>
            <img className="Loading" src="src/assets/loading-wheel.svg"></img>
            <p className="normalText">Hang tight</p>
            <p className="normalText">Things are happening...</p>
          </>
        );
      }
      
    return(
        <section>
        {checkDelCom ? <p className="DeletedLine">{checkDelCom}</p>: null}
        {errorCatch ? <p className="DeletedLine">{errorCatch}</p> : null}
        <button onClick={submitHandler} disabled={username === comment.author ? false : true}>Delete Comment</button>
        </section>
    )
}


export default DeletedThisComment