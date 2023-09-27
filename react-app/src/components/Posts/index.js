import './Posts.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPostsThunk } from '../../store/post'
import { useHistory } from 'react-router-dom';

const Posts = () => {
    const allPosts = [];
    const postsData = useSelector(state => state.post.allPosts);
    const dispatch = useDispatch();
    const history = useHistory();
    Object.values(postsData)?.map(post => allPosts.push(post));


    useEffect(() => {
        dispatch(loadPostsThunk());
    }, [dispatch])

    const handlePostClick = (postId) => {
        history.push(`/posts/${postId}`);
    };

    return (
        // <h1 className='heading_posts'>All Posts Component!!</h1>
        <>
        <div className='all-posts-container'>
            {allPosts.map(post => (
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

export default Posts;