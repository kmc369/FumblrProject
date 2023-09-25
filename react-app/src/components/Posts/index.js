import './Posts.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { loadPostsThunk } from '../../store/post'

const Posts = () => {
    const allPosts = [];
    const postsData = useSelector(state => state.post.allPosts);
    console.log(postsData)
    const dispatch = useDispatch();
    Object.values(postsData)?.map(post => allPosts.push(post));
    console.log(allPosts)

    useEffect(() => {
        dispatch(loadPostsThunk());
    }, [dispatch])


    return (
        <h1>All Posts Component!!</h1>
    )

}

export default Posts;