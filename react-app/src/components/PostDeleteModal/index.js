import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import './PostDeleteModal.css'
import * as PostActions from '../../store/post'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const PostDeleteModal = ({postId}) =>{
    // const blak = useSelector(state => state.note.singlePost.comment); // Adjust this selector to match your state structure
    const dispatch = useDispatch()
    const history = useHistory()
    const {closeModal} = useModal()
    
      function  handleDelete(e){
        e.preventDefault();
        dispatch(PostActions.PostDeleteModalThunk(postId))
        history.push('/')
        closeModal()
      }

        return (
    
          
            <div>
               <div className="delete-note-container">
              <p className="delete-message"> Are you sure you want to delete this post?</p>
              <div className="buttonItems">
                <div><button className='confirm'  type='submit' onClick={handleDelete} >Delete</button></div>
                <div><button className='deny' onClick={closeModal}>Cancel</button></div>
              </div>
            </div>
            </div>
          )
    }
    
    export default PostDeleteModal