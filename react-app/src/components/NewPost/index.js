import './NewPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { createPostThunk, updatePostThunk } from '../../store/post';
import { useModal } from '../../context/Modal';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const NewPost = ({ type, post }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user)
    const { closeModal } = useModal();
    const isTherePost = Object.keys(post).length;
    const [postContent, setPostContent] = useState(isTherePost ? post.text_content : "")
    const [postTitle, setPostTitle] = useState(isTherePost ? post.title : "")
    const [secondContent, setSecondContent] = useState(isTherePost ? post.second_content : "")
    const [postType, setPostType] = useState(type)
    const [userId, setUserId] = useState(currentUser.id)
    const [errors, setErrors] = useState({})
    const [create, setCreate] = useState(isTherePost ? false : true)

    const validationForPost = () => {
        const validationErrors = {};
        if(postContent.length < 1 && postTitle.length < 1) validationErrors.content = "Post must have at a title or a body of at least 1 character."
        return validationErrors
    }
    
    const isDisabled = () => {
        const validationErrors = validationForPost();
        return (Object.values(validationErrors).length) ? true : false 
    }
    const newPost = {
        title: postTitle,
        text_content: postContent,
        second_content: secondContent,
        post_type: postType,
        user_id: userId
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setErrors({})
        const validationErrors = validationForPost();
        if(Object.values(validationErrors).length) setErrors(validationErrors);
        if(create) {
            await dispatch(createPostThunk(newPost))
            console.log("created post")
        } else {
            await dispatch(updatePostThunk(newPost))
            console.log('updated post')
        }
        history.push('/')
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
                {create ? <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button> : <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Update</button>}
            </div>
        </div>
    )

}

export default NewPost;