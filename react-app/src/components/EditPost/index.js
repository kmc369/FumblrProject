import './EditPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useEffect } from 'react';
import NewPost from '../NewPost';
import { loadSpecificPostThunk } from '../../store/post';


const EditPost = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const currentPost = useSelector(state => state.post.singlePost);
    const postIdNum = Number(postId)
    let postLoaded;
    currentPost.id ? postLoaded = currentPost : postLoaded = 0

    useEffect(() => {
        dispatch(loadSpecificPostThunk(postIdNum))
    }, [dispatch])

    return (
        <>
            <NewPost post={currentPost} type={currentPost.post_type}/>
        </>
    )
}

export default EditPost;