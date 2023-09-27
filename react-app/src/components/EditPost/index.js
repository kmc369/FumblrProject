import './EditPost.css';
import  { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { useEffect } from 'react';
import NewPost from '../NewPost';
import { loadSpecificPostThunk } from '../../store/post';


const EditPost = () => {
    const dispatch = useDispatch();
    const { postId } = useParams();
    const currentUser = useSelector(state => state.session.user);
    const currentPost = useSelector(state => state.post.singlePost)

    useEffect(() => {
        dispatch(loadSpecificPostThunk(postId))
    }, [dispatch])

    return (
        <>
            <NewPost post={currentPost} />
        </>
    )
}

export default EditPost;