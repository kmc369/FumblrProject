import { useHistory } from 'react-router-dom';

import './PhotoForm.css'
import React, { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import * as PostActions from '../../store/post'
import { useSelector } from 'react-redux';


function PhotoForm () {
const [content,setContent] = useState("")
const [image,setImage] = useState(null)
const {closeModal} = useModal()
const dispatch = useDispatch()
const sessionUser = useSelector(state => state.session.user);
const [imageLoading, setImageLoading] = useState(false);
const [change,setChange] = useState(true)
const [isImageSelected, setIsImageSelected] = useState(false);
const history = useHistory();

function handleImageChange(e) {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setIsImageSelected(e.target.files[0] !== null);
}


async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', content);
    formData.append('text_content',null );
    formData.append('user_id', sessionUser.id);
    formData.append('second_content', image);
    formData.append('post_type', 'photo');
    setImageLoading(true);

  
    await dispatch(PostActions.createPostThunk(formData))
    // history.push("/images");
    closeModal()
    const newCommets = await dispatch(PostActions.loadPostsThunk())
    // setChange(false)
  }
//   console.log("isImageSelected:", isImageSelected);

  
    return (
        <>
        <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit} >
        <div className='photo-container'>
            <label className='image-label'>
            <i className="fa-solid fa-camera-retro"></i>
            <input className='input-image'
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              
            />
            </label>
            <div className='buttonandinput'>
            <input className='input-text'
                type='text'
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                placeholder='Go ahead, say something!'
            />
            <button className='photoButton' disabled={!isImageSelected}> Submit</button>


        </div>
        {(imageLoading)&& <p>Loading...</p>}
        </div>
        </form>
        </>
    )
}

export default PhotoForm