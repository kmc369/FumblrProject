import './NewPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { createPostThunk } from '../../store/post';
import { useModal } from '../../context/Modal';

const NewPost = ({ type }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [postContent, setPostContent] = useState("")
    const [postTitle, setPostTitle] = useState("")
    const [secondContent, setSecondContent] = useState("")
    const [postType, setPostType] = useState(type)
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
        await dispatch(createPostThunk(newPost))
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

export default NewPost;