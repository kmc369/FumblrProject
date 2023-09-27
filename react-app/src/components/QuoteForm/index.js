import  { useDispatch, useSelector } from 'react-redux';
import { useEffect , useState} from 'react';
import { createPostThunk } from '../../store/post';
import { useModal } from '../../context/Modal';
import './QuoteForm.css';



const QuoteForm = ({ type }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const [quoteContent, setQuoteContent] = useState("")
    const [Author, setAuthor] = useState("")
    const [secondContent, setSecondContent] = useState("")
    const [postType, setPostType] = useState(type)

    const sessionUser = useSelector(state => state.session.user);
    console.log(sessionUser)
    const [errors, setErrors] = useState({})

    const validationForPost = () => {
        const validationErrors = {};
        if(quoteContent.length < 1 && Author.length < 1) validationErrors.content = "Post must have at a title or a body of at least 1 character."
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
            title:Author,
            text_content: quoteContent,
            second_content: null,
            post_type: type,
            user_id: sessionUser.id
        }
        console.log("the form data is " ,newPost)
        await dispatch(createPostThunk(newPost))
        // console.log("created post")
        return (closeModal())
    };
    
    const submitButton = "newPost-submit-button" + (isDisabled() ? ' disabled' : '')


    return (
        <div className="quote-modal">
            {/* need to add in the username of user who is logged in and posting. See Tumblr website */}
            <h2 className='user-tag'>{sessionUser.username}</h2>
        <div className='quote-modal-content'>
         
                <input 
                value={Author}
                onChange={(e)=>setAuthor(e.target.value)}
                placeholder="Author"
                className="author-content"
                
                />
           
          
                <textarea 
                value={quoteContent}
                onChange={(e)=>setQuoteContent(e.target.value)}
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
                <button id="quoteSubmitButton" className={submitButton} onClick={handleSubmit} disabled={isDisabled()} >Post Now</button>
            </div>
            </div>
            </div>
        </div>
    )

}

export default QuoteForm;