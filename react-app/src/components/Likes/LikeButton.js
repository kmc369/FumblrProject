import './LikeButton.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { fetchLikesThunk, addLikeThunk, removeLikeThunk } from '../../store/like';


const LikeButton = ({ post_id }) => {
    const [isLiked, setisLiked] = useState(false);
    const dispatch = useDispatch();
    const likesCount = useSelector(state => state.like.likes.count);    //number of likes from store state
    const users = useSelector(state => state.like.likes.users);
    const session = useSelector(state => state.session);
    let user_id;

    if (session.user) {
        user_id = session.user.id;
    }
    else {
        user_id = null;
    }
    useEffect(() => {
        if (Array.isArray(users) && user_id) {
            const current_user = users.filter(user => user[0] == user_id);
            if (current_user.length > 0) {
                setisLiked(true);
            }
            else {
                setisLiked(false);
            }
        }
    }, [users]);

    const handleLike = () => {      //based on like store state, add or remove like accordingly when click the button
        if (user_id) {
            if (isLiked) {
                dispatch(removeLikeThunk(post_id, user_id));
            } else {
                dispatch(addLikeThunk(post_id, user_id));
            }
        }
    };

    useEffect(() => {
        dispatch(fetchLikesThunk(post_id, user_id));    //update store state when rendered the first time
    }, [dispatch]);
    // console.log("im username", username)


    return (
        <div>
            <button className='LikeButton' onClick={handleLike} style={{ color: isLiked ? 'red' : 'white' }}>
                {isLiked ? <FaHeart /> : <FaRegHeart />}
            </button>
            {/* <div>test</div> */}
        </div>
    );
};

export default LikeButton;
