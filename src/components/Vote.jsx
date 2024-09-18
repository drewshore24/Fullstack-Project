import { useState, useEffect } from "react";
import { patchVote} from "../../websiteAPI";
import { Link } from "react-router-dom";

export function addVote(article_id){
    const [currVote, setCurrVote] = useState(0)

    useEffect(()=>{
        patchVote(article_id).then(() =>{
            setCurrVote(currVote + 1)
        })
    },[currVote])
}