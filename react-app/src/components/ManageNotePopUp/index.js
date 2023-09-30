import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import './ManageNotePopUp.css'
import * as NoteActions from '../../store/note'

const DeleteNotePopUp = ({comment})=>{

  const dispatch = useDispatch()
  const user = useSelector((state)=>state.session.user)
  // console.log("the comment id is ", comment.id)
  const {closeModal} = useModal()
  
  function handleDelete(e){
    e.preventDefault()
    dispatch(NoteActions.deleteCommentThunk(comment.id))
    closeModal()
  }
  
  // dispatch(NoteActions.getCommentsOfPostThunk(1))
  useEffect(() => {
  
      const fetchData = async () => {
        await dispatch(NoteActions.getCommentsOfPostThunk(comment.post_id));
        // setComment(commentData);
        // setContent(commentData.content)
      
      };
      
      fetchData(); // Call the async function immediately
    }, [dispatch,comment.id]);
 
    return (

      
        <div>
           <div className="delete-note-container">
          <h3 className="confirmDelete"> Confirm Delete</h3>
          <p className="delete-message"> Are you sure you want to delete this post?</p>
          <div className="buttonItems">
            <div><button className='confirm'  type='submit' onClick={handleDelete} >Delete</button></div>
            <div><button className='deny' onClick={closeModal}>Cancel</button></div>
          </div>
        </div>
        </div>
      )
}

export function EditNotePopUp ({comment}){
  const dispatch = useDispatch()
const user = useSelector((state)=>state.session.user)


const [content ,setContent] = useState(comment.content)
const {closeModal} = useModal()



const handleSubmit = async (e)=>{
  
    
    e.preventDefault()
    
    const formData = {
        content:content,
        user_id:comment.user_id,
        post_id:comment.post_id
     
        
    }

    

     dispatch(NoteActions.EditCommentThunk(formData,comment.id))
    setContent("")
    closeModal()
  
    
    
    

    
}
  return(

    <>
    <div className="EditForm" >
    <h3 className="edit-header">Let update this comment!</h3>
     
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                type='text'
                className="editTextText"
            />
            <button onClick={handleSubmit} className="editSubmitButton" type="submit">Reply</button>
      
    </div>

    </>
  )
}



export default DeleteNotePopUp