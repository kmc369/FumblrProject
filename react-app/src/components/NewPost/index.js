import './NewPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { createPostThunk } from '../../store/post';
import { useModal } from '../../context/Modal';

const NewPost = () => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [postContent, setPostContent] = useState("")
    const [errors, setErrors] = useState({})

    const validationForPost = () => {

    }
    
    const isDisabled = () => {
        // const validationErrors = validationForPost();
        // return (Object.values(validationErrors).length) ? true : false 
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors({})
        const validationErrors = validationForPost();
        if(Object.values(validationErrors).length) setErrors(validationErrors);

        const newPost = {

        }
        await dispatch(createPostThunk(newPost))
        return (closeModal())
    };
    
    const submitButton = "newPost-submit-button" + (isDisabled() ? ' disabled' : '')


    return (
        <div className="newPost-modal">
            <div>
                Title (still need to work on it)
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
                <button className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button>
            </div>
        </div>
    )

}

export default NewPost;