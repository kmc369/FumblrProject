import React, { useEffect, useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useSelector } from 'react-redux';
import {useParams } from 'react-router-dom';
import './PostModal.css'
import * as PostActions from '../../store/post'


const DeletePostModal = ()=>{
    // const blak = useSelector(state => state.note.singlePost.comment); // Adjust this selector to match your state structure
    const dispatch = useDispatch()
    const {closeModal} = useModal()
    const post_id = useParams()
    
      function  handleDelete(e){
        e.preventDefault();
        dispatch(PostActions.deletePostThunk(post_id))
        closeModal()
    
      }

      function handleCancel(e){
        e.preventDefault();
        console.log("hello")
        closeModal()
      }
      
        return (
    
          
            <div>
               <div className="delete-note-container">
              <p className="delete-message"> Are you sure you want to delete this post?</p>
              <div className="buttonItems">
                <div><button className='confirm'  type='submit' onClick={handleDelete} >Delete</button></div>
                <div><button className='deny' onClick={handleCancel}>Cancel</button></div>
              </div>
            </div>
            </div>
          )
    }
    
    export default DeletePostModal