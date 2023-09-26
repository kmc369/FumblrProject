import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { fetchLikesThunk, addLikeThunk, removeLikeThunk } from '../../store/like';


const LikeButton = ({ post_id, user_id }) => {
    const [isLiked, setisLiked] = useState(false);
    const dispatch = useDispatch();
    const likesCount = useSelector(state => state.like.likes.count);    //number of likes from store state
    const users = useSelector(state => state.like.likes.users);

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
            <div>
                <button onClick={handleLike} style={{ color: isLiked ? 'red' : 'grey', border: 'none', background: 'none' }}>
                    {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
                    {likesCount}
                </button>
            </div>
            <div className="user-liked-the-post">
                {users && users.length > 0 ? (
                    <ul style={{ color: 'white' }}>
                        {users.map((user, index) => (
                            <li key={index}>{user[1]}</li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ color: 'white' }}>No likes yet</p>
                )}
            </div>

        </div>
    );
};

export default LikeButton;
