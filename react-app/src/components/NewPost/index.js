import './NewPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { createPostThunk, loadSpecificPostThunk, updatePostThunk } from '../../store/post';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const NewPost = ({ post, type }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)
    const { closeModal } = useModal();
    const isTherePost = post && Object.keys(post).length > 0;
    const [postContent, setPostContent] = useState(isTherePost ? post.text_content : "")
    const [postTitle, setPostTitle] = useState(isTherePost ? post.title : "")
    const [secondContent, setSecondContent] = useState(isTherePost ? post.second_content : "")
    const [postType, setPostType] = useState(isTherePost ? post.post_type : type)
    const [userId, setUserId] = useState(1) 
    const [errors, setErrors] = useState({})
    const [create, setCreate] = useState(isTherePost ? false : true)
    const [image,setImage] = useState(null)
    const [imageLoading, setImageLoading] = useState(false);

    const validationForPost = () => {
        const validationErrors = {};
        if(postType === 'quote' || postType === 'text') {
            if(postContent.length < 1 && postTitle.length < 1) validationErrors.content = "Post must have at a title or a body of at least 1 character."
        }
        if(postType === 'link') {

        }
        if(postType === 'photo') {
            if(secondContent.length < 1) validationErrors.content = 'Caption must be at least 1 character long.'
        }
        return validationErrors
    }
    
    const isDisabled = () => {
        const validationErrors = validationForPost();
        return Object.keys(validationErrors).length > 0
    }
    const newPost = {
        title: postTitle,
        text_content: postContent,
        second_content: secondContent,
        post_type: postType,
        user_id: userId
    }
    // console.log('create?', create)
    const handleSubmit = async e => {
        e.preventDefault();
        setErrors({})
        const validationErrors = validationForPost();
        if(Object.values(validationErrors).length) setErrors(validationErrors);
        if(create) {
            await dispatch(createPostThunk(newPost))
            // console.log("created post")
        } else {
            newPost.id = post.id
            newPost.user = currentUser
            // console.log(newPost)
            await dispatch(updatePostThunk(newPost))
            // console.log('updated post')
        }
        history.push('/')
        return (closeModal())
    };

    const submitButton = "newPost-submit-button" + (isDisabled() ? ' disabled' : '')
    
    return (
        <div className="newPost-modal">
            {/* need to add in the username of user who is logged in and posting. See Tumblr website */}
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
                value={postContent}
                onChange={e => setPostContent(e.target.value)}
                className="post-content"
                rows='6'
                cols='32'
                />
            </div>
            <div>
                <button className='close-newPost-modal' onClick={closeModal}>Close</button>
            </div>
            <div>
                {create ? <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button> : <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Update</button>}
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
                value={postTitle}
                onChange={(e)=>setPostTitle(e.target.value)}
                placeholder="Author"
                className="author-content"
                
                />
           
          
                <textarea 
                value={postContent}
                onChange={(e)=>setPostContent(e.target.value)}
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
                {create ? <button id='quoteSubmitButton' className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button> : <button id='quoteSubmitButton' className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Update</button>}
            </div>
            </div>
            </div>
        </div>
                </>
            ) : <></>}
            {type === 'photo' ? (
                <>
                <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit} >
                 <div className='photo-container'>
                <label className='image-label'>
                <i className="fa-solid fa-camera-retro"></i>
                <input className='input-image'
                    type="file"
                    accept="image/*"
                    onChange={(e)=>setImage(e.target.files[0])}
                
                />
                </label>
                <div className='buttonandinput'>
                <input className='input-text'
                    type='text'
                    value={secondContent}
                    onChange={(e)=>setSecondContent(e.target.value)}
                    placeholder='Photo Caption...'
                />
                <button className='photoButton'> Submit</button>


            </div>
            </div>
            {(imageLoading)&& <p>Loading...</p>}
            </form>
                </>
            ) : <></>}
            {type === 'link' ? (
                <>
                <form  method="POST" encType="multipart/form-data" onSubmit={handleSubmit} >
        <div className='photo-container'>
            <label className='image-label'>
       
            <input className='input-image'
                type="text"
                value={postContent}
                placeholder='Type or place Link'
                onChange={(e)=>setPostContent(e.target.value)}
              
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
        </div>
    )

}

export default NewPost;