import './CurrentUserPosts.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import { loadUserPostsThunk } from '../../store/post';


const CurrentUserPosts = () => {
    const {userId} = useParams()
    const userPosts = []
    const userPostData = useSelector(state => state.post.allPosts);
    const dispatch = useDispatch()
    const history = useHistory()
    Object.values(userPostData)?.map(post => userPosts.push(post))
    
    useEffect(() => {
        dispatch(loadUserPostsThunk(userId))
    }, [dispatch, userId])
    
    const handlePostClick = (postId) => {
        history.push(`/post/${postId}`);
    };

    return (
        // <h1>Current User Posts Component!!</h1>
        <>
        <div className='all-posts-container'>
            {userPosts && userPosts.map(post => (
                <div className='post' key={post.id} onClick={() => handlePostClick(post.id)}>
                    <div className='user-username'>
                        {post.user.username}
                    </div>
                    <div className='post-title'>
                        {post.title}
                    </div>
                    <div className='post-textContent'>
                        {post.text_content}
                    </div>
                </div>
            ))}
        </div>
        </>
    )

}

export default CurrentUserPosts;