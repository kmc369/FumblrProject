import './EditPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { updatePostThunk } from '../../store/post';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../context/Modal';


const EditPost = ({post}) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [postContent, setPostContent] = useState(post?.postContent)
    const [postTitle, setPostTitle] = useState(post?.postTitle)
    const [secondContent, setSecondContent] = useState(post?.secondContent)
    const [postType, setPostType] = useState(post?.type)
    //console.log(postType)
    const [userId, setUserId] = useState(1)
    const [errors, setErrors] = useState({})

    const validationForPost = () => {
        const validationErrors = {};
        if(postContent.length < 1 && postTitle.length < 1) validationErrors.content = "Post must have at a title or a body of at least 1 character."
        return validationErrors
    }
    
    const isDisabled = () => {
        const validationErrors = validationForPost();
        return (Object.values(validationErrors).length) ? true : false 
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors({})
        const validationErrors = validationForPost();
        if(Object.values(validationErrors).length) setErrors(validationErrors);

        const newPost = {
            title: postTitle,
            text_content: postContent,
            second_content: secondContent,
            post_type: postType,
            user_id: userId
        }
        await dispatch(updatePostThunk(newPost))
        console.log("created post")
        return (closeModal())
    };
    
    const submitButton = "newPost-submit-button" + (isDisabled() ? ' disabled' : '')


    return (
        <div className="newPost-modal">
            {/* need to add in the username of user who is logged in and posting. See Tumblr website */}
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
                placeholder="Go ahead, put anything."
                className="post-content"
                rows='6'
                cols='32'
                />
            </div>
            <div>
                <button className='close-newPost-modal' onClick={closeModal}>Close</button>
            </div>
            <div>
                <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button>
            </div>
        </div>
    )
}

export default EditPost;