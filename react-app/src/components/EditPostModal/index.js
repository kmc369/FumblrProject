import './EditPostModal.css'
import React, { useState ,useEffect} from "react";
import {useParams } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
// import * as NoteActions from '../../store/note';
import { useModal } from "../../context/Modal";

function EditPostModal({post}){

const dispatch = useDispatch()
const user = useSelector((state)=>state.session.user)
const type = post.post_type

const [postTitle ,setPostTitle] = useState(post ? post.title: "")
const [content,setContent] = useState(post ? post.text_content : "")
const [second_content, setSecondContent]=useState(post ? post.second_content: "")
const [post_id,setPostId] = useState(post ? post.id: "")
const [postType,setPostType] = useState(post ? post.post_type: "")
const [userid,setUserId] = useState(post ? post.user_id: "")

const {closeModal} = useModal()



const handleSubmit = async (e)=>{
  
    
    e.preventDefault()
    
    const formData = {
        content:content,
        user_id:post.user_id,
        post_id:post.post_id
     
        
    }

    

    //  dispatch(NoteActions.EditpostThunk(formData,post.id))
    // setContent("")
    closeModal()
  
    
    
    

    
}
  return(

    <>
    {type === 'text' ? (
                <>
                <div>
                <textarea 
                value={postTitle}
                onChange={e => setPostTitle(e.target.value)}
                placeholder="Title"
                className="post-title"
                rows='6'
                cols='32'
                />
            </div>
            <div>
                <textarea 
                value={content}
                onChange={e => setContent(e.target.value)}
                className="post-content"
                rows='6'
                cols='32'
                />
            </div>
            <div>
                <button className='close-newPost-modal' onClick={closeModal}>Close</button>
            </div>
            <div>
                {/* {create ? <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button> : <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Update</button>} */}
            </div>
                </>
            ) : <></>}
            {type === 'quote' ? (
                <>
                <div className="quote-modal">
            {/* need to add in the username of user who is logged in and posting. See Tumblr website */}
            {/* <h2 className='user-tag'>{currentUser.username}</h2> */}
              <div className='quote-modal-content'>
         
                <input 
                value={content}
                onChange={(e)=>setContent(e.target.value)}
                placeholder="Author"
                className="author-content"
                
                />
           
          
                <textarea 
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
                placeholder="Something someone else said here."
                className="post-content"
                rows='6'
                cols='32'
                />
           
            <div className='buttom-items'>
            <div>
                <button className='close-quote-modal' onClick={closeModal}>Close</button>
            </div>
            <div>
                {/* {create ? <button id='quoteSubmitButton' className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button> : <button id='quoteSubmitButton' className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Update</button>} */}
            </div>
            </div>
            </div>
        </div>
                </>
            ) : <></>}
             {type === 'link' ? (
                <>
                <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit} >
        <div className='photo-container'>
            <label className='image-label'>
       
            <input className='input-image'
                type="text"
                value={content}
                placeholder='Type or place Link'
                onChange={(e)=>setContent(e.target.value)}
              
            />
            </label>

            <div className='buttonandinput'>
            <input className='input-text'
                type='text'
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
                placeholder='Go ahead, say something!'
            />
            <button className='photoButton'> Submit</button>

{/* hello */}
        </div>
        </div>
     
        </form>
                </>
            ) : <></>}
    
    </>
  )
}

export default EditPostModal