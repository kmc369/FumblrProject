import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom'
import './ManageNotePopUp.css'
import * as NoteActions from '../../store/note'



const DeleteNotePopUp = ({comment})=>{
const blak = useSelector(state => state.note.singlePost.comment); // Adjust this selector to match your state structure
const dispatch = useDispatch()
const {closeModal} = useModal()
const post_id = useParams()

  function  handleDelete(e){
    e.preventDefault();
     dispatch(NoteActions.deleteCommentThunk(comment.id))
    closeModal()
    const newCommets = dispatch(NoteActions.getCommentsOfPostThunk(post_id))

  }

  function handleCancel(e){
    e.preventDefault();
    closeModal()
  }
  
    return (

      
        <div>
           <div className="delete-note-container">
          <h3 className="confirmDelete"> Confirm Delete</h3>
          <p className="delete-message"> Are you sure you want to delete this post?</p>
          <div className="buttonItems">
            <div><button className='confirm'  type='submit' onClick={handleDelete} >Delete</button></div>
            <div><button className='deny' onClick={handleCancel}>Cancel</button></div>
          </div>
        </div>
        </div>
      )
}

export function EditNotePopUp ({comment}){
  const dispatch = useDispatch()
//   const user = useSelector((state)=>state.session.user)
  const {closeModal} = useModal()
const note_id  = comment.id

const [content ,setContent] = useState(comment.content)




function handleSubmit(e){

    
    e.preventDefault()
    
    const formData = {
        content:content,
        user_id:comment.user_id,
        post_id:comment.post_id
     
        
    }
    dispatch(NoteActions.EditCommentThunk(formData,note_id))
    setContent("")
    closeModal()
  
      
}


  return(

    <>
  
    <div className="EditForm">
      <h1 className="editNoteheader">Edit Note</h1>
        <form className="editFormData">
            <textarea className="textForEditNote"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                type='text'
            />
        </form>
            <button className="Save" type="submit" onClick={handleSubmit} >Reply</button>
    </div>

    </>
  )
}



export default DeleteNotePopUp