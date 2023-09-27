import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import './ManageNotePopUp.css'
import * as NoteActions from '../../store/note'

const DeleteNotePopUp = ()=>{
 
    return (

      
        <div>
           <div className="delete-note-container">
          <h3 className="confirmDelete"> Confirm Delete</h3>
          <p className="delete-message"> Are you sure you want to delete this post?</p>
          <div className="buttonItems">
            <div><button className='confirm'  type='submit'  >Delete</button></div>
            <div><button className='deny' >Cancel</button></div>
          </div>
        </div>
        </div>
      )
}

export function EditNotePopUp (){
  const dispatch = useDispatch()
const user = useSelector((state)=>state.session.user)
// console.log(old_content)
const {note_id} = useParams()
const note_id_int = parseInt(note_id, 10);
const [comment, setComment] = useState("");
const [content ,setContent] = useState("")



// dispatch(NoteActions.getCommentsOfPostThunk(1))
useEffect(() => {

    const fetchData = async () => {
      const commentData = await dispatch(NoteActions.getCommentByIdThunk(note_id_int));
      setComment(commentData);
      setContent(commentData.content)
    
    };
    
    fetchData(); // Call the async function immediately
  }, [note_id_int]);

const handleSubmit = async (e)=>{
    console.log("the new content is ",content)
    
    e.preventDefault()
    
    const formData = {
        content:content,
        user_id:comment.user_id,
        post_id:comment.post_id
     
        
    }

    console.log("the form data is ",formData)

     dispatch(NoteActions.EditCommentThunk(formData,note_id_int))
    setContent("")
  
    
    
    

    
}
  return(

    <>
    <h1>hello from Edit Note</h1>
    <div className="EditForm" onSubmit={handleSubmit}>
        <form>
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                type='text'
            />
            <button type="submit">Reply</button>
        </form>
    </div>

    </>
  )
}



export default DeleteNotePopUp