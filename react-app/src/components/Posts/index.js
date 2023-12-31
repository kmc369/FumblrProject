import './Posts.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadPostsThunk } from '../../store/post'
import { useHistory } from 'react-router-dom';
import PostTile from '../PostTile';
const Posts = () => {
    const allPosts = [];
    const postsData = useSelector(state => state.post.allPosts);
    const dispatch = useDispatch();
    const history = useHistory();
    const User = useSelector(state => state.session.user);
    Object.values(postsData)?.map(post => allPosts.push(post));
    
    if(allPosts.length){
        allPosts.sort(
            (a, b) => {
                const aTime = Date.parse(a.updated_at);
                const bTime = Date.parse(b.updated_at);
                return bTime - aTime
            }
          );
    }

    // console.log(allPosts)

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
                    <PostTile post={post} />
                    // <div className='post' key={post.id} onClick={() => handlePostClick(post.id)}>
                    //     <div className='user-username'>
                    //         {post.user.username}
                    //     </div>
                    //     <div className='post-title'>
                    //         {post.title}
                    //     </div>
                    //     <div className='post-textContent'>
                    // {post.second_content ? (
                    //  <img className="postimages" src={post.second_content} alt="Post Image" />
                    //      ) : (
                    //      <span>{post.text_content}</span>
                    //         )}
                    // </div>
                    // </div>
                ))}
            </div>
        </>
    )

}

export default Posts;