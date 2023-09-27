import './SpecificPost.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { loadPostsThunk } from '../../store/post'
import PostTile from '../PostTile';
import LikeButton from '../Likes/LikeButton';
import LikeShow from '../Likes/LikeShow';
import { FaShare, FaCommentDots, FaRetweet, FaEdit, FaTrash } from 'react-icons/fa';
import DeletePost from '../DeletePost';
import OpenModalButton from '../OpenModalButton'
//import notes section here


const SpecificPost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.allPosts);
    const session = useSelector(state => state.session);
    const post = posts[postId];
    let currentUserId;
    // const likesCount = useSelector(state => state.like.likes.count);
    // const notesCount = likesCount


    if (session.user) {
        currentUserId = session.user.id
    }
    else {
        currentUserId = null
    }

    useEffect(() => {
        dispatch(loadPostsThunk(postId));
    }, [dispatch]);



    if (!post) {
        return null;
    }

    if (post.user_id) {
        return (
            <>
            <PostTile post={post} />
            <OpenModalButton buttonText={'Delete Post'} modalComponent={<DeletePost postId={postId} />} />
            </>

        );
    }
}

export default SpecificPost;

