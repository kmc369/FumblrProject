import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import * as NoteActions from '../../store/note'
// import { openDeleteModal } from "../DeleteNote";
import PostTile from "../PostTile";
import DeleteNote from "../ManageNote";

import "./NoteForm.css"


function NoteForm({post_id}){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const blak = useSelector(state => state.note.singlePost.comment); // Adjust this selector to match your state structure

 
    const [content,setContent] = useState("")
    const [postComments,setPostComments] = useState({})
    const [change ,setChange] = useState(false)


    const handleSubmit = async (e)=>{
    e.preventDefault();
   
  
    const new_note = {
        content:content,
        user_id:sessionUser.id,
        post_id:post_id
    

    }
  

    await dispatch(NoteActions.createNoteThunk(new_note))
    
    // const post = await dispatch(NoteActions.getCommentsOfPostThunk(post_id))
  
    
    setContent("")
   //missing a rerender here

}

    useEffect(()=>{
        async function fetchData() {
            const getCommentsOfPost = await dispatch(NoteActions.getCommentsOfPostThunk(post_id))
           
        setPostComments(getCommentsOfPost); 
      }
      fetchData();
    }, [dispatch, post_id]);

    
    
    if(blak===undefined){
        return null
    }
    // if(blak.length===0){
      
    //     return null
    //   }

    






    return (
        <>
            
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
            
            <div className="noteTextBox">
       {    sessionUser && (
            <div className="input-container"> 
            <label id="label-form">
            <input className="comment-input"
            placeholder="Have something to say?"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
        
            />
            <button id="note-button" type="submit">Reply</button>
            </label>
            </div>
           
     
                )}
            <div className="manage-and-comment">
        <div className="comments-container">
            {/* {console.log("blak length is ", blak.length)} */}
          {blak.length === 0 ? (
            // Render the input and message when there are no comments
            <>
          
              <div>No comments yet.</div>
            </>
          ) : (
            // Render the comments if there are any
            blak.map((comment, index) => (
              <div className="comment-items" key={index} id={`item${index}`}>
                {comment.content}
              </div>
            ))
          )}
        </div>




            <div className="manage-note">
                    {blak.map((comment, index) => (
                    
                    <DeleteNote comment={comment}  key={index} />
                        ))}
                    </div>
            </div>





            </div>
            </form>

        
        
        
        
        
        
        </>
    )

}

export default NoteForm