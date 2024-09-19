import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../websiteAPI";
import ShowPostedComment from "./ShowPostedComment.jsx";

const NewComment = ({username}) => {
    const { article_id } = useParams();
    const [commentInput, setCommentInput] = useState('')
    const [commentResponse, setCommentResponse] = useState(null)
    const [errorCatch, setErrorCatch] = useState(false)
    const userName = username

    const changeHandler = (e) =>{
        setCommentInput(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        postComment(article_id, userName, commentInput)
        .then((response)=>{
            console.log(response, 'R')
            setCommentResponse(response)
            console.log(commentResponse, 'CR')
            setCommentInput("")
        })
        .catch((err)=>{
            setErrorCatch('Your post was unsuccessful. Please refresh and give it another try!')
        })
    }
    return(
        <form onSubmit={submitHandler}>
            {commentResponse ? <ShowPostedComment commentResponse={commentResponse}/> : null}
            {errorCatch ? <p>{errorCatch}</p> : null}
            <label> Post A Comment About This Article Below!</label>
            <br/>
            <textarea
            required
            value={commentInput}
            onChange={changeHandler}
            >
            </textarea>
            <br/>
            <br/>
            <button disabled={commentResponse}>Post Comment</button>
        </form>
    )
}


export default NewComment