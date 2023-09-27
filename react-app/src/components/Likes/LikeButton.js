import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { fetchLikesThunk, addLikeThunk, removeLikeThunk } from '../../store/like';


const LikeButton = ({ post_id }) => {
    const [isLiked, setisLiked] = useState(false);
    const dispatch = useDispatch();
    const likesCount = useSelector(state => state.like.likes.count);    //number of likes from store state
    const users = useSelector(state => state.like.likes.users);
    const user_id = useSelector(state => state.session.user.id);

    useEffect(() => {
        if (Array.isArray(users)) {
            const current_user = users.filter(user => user[0] == user_id);
            if (current_user.length > 0) {
                setisLiked(true);
            }
            else {
                setisLiked(false);
            }
        }
    }, [users]);

    useEffect(() => {
        dispatch(fetchLikesThunk(post_id, user_id));    //update store state when rendered the first time
    }, [dispatch]);
    // console.log("im username", username)
    const handleLike = () => {      //based on like store state, add or remove like accordingly when click the button
        if (isLiked) {
            dispatch(removeLikeThunk(post_id, user_id));
        } else {
            dispatch(addLikeThunk(post_id, user_id));
        }
    };

    return (
        <div>
            <button className='LikeButton' onClick={handleLike} style={{ color: isLiked ? 'red' : 'grey', border: 'none', background: 'none' }}>
                {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
            </button>
            {/* <div>test</div> */}
        </div>
    );
};

export default LikeButton;
