import './LinkForm.css'
import React, { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import * as PostActions from '../../store/post'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LinkForm ({type}){
const [link,setLink] = useState("")
const {closeModal} = useModal()
const dispatch = useDispatch()
const sessionUser = useSelector(state => state.session.user);
const [title, setTitle] = useState("");
const history = useHistory();







const handleSubmit = async e => {
    e.preventDefault();


    const newPost = {
        title:title,
        text_content: link,
        second_content: null,
        post_type: type,
        user_id: sessionUser.id
    }
    console.log("the form data is " ,newPost)
    await dispatch(PostActions.createPostThunk(newPost))
    // console.log("created post")
    return (closeModal())
};

// const submitButton = "newPost-submit-button" + (isDisabled() ? ' disabled' : '')

    return (
        <>
        <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit} >
        <div className='photo-container'>
            <label className='image-label'>
       
            <input className='input-image'
                type="text"
                value={link}
                placeholder='Type or place Link'
                onChange={(e)=>setLink(e.target.value)}
              
            />
            </label>

            <div className='buttonandinput'>
            <input className='input-text'
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Go ahead, say something!'
            />
            <button className='photoButton'> Submit</button>

{/* hello */}
        </div>
        </div>
     
        </form>
        </>
    )
}

export default LinkForm