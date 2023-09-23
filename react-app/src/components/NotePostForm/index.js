import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'



import "./NoteForm.css"


function NoteForm(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
   
    const {post_id} = useParams()
    const post_id_int = parseInt(post_id, 10);
    const [content,setContent] = useState("")



const handleSubmit = async (e)=>{
    e.preventDefault();
    
    console.log(post_id)
    const new_note = {
        content:content,
        user_id:sessionUser.id,
        post_id:post_id_int
    

    }
    console.log(new_note)

    // await dispatch
    setContent("")
   

}




return (
    <>
        <form onSubmit={handleSubmit}> 
        <div className="noteTextBox">
        <textarea
        placeholder="Have something to say?"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        />
        </div>
        <div className="submit_button">
            <button type="submit">Reply</button>
        </div>

        
        </form>
    
    
    
    
    
    
    </>
)

}

export default NoteForm