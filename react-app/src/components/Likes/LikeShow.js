import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { fetchLikesThunk, addLikeThunk, removeLikeThunk } from '../../store/like';


const LikeShow = ({ post_id }) => {
    const [isLiked, setisLiked] = useState(false);
    const [showlike, setshowlike] = useState(false);
    const dispatch = useDispatch();
    const likesCount = useSelector(state => state.like.likes.count);    //number of likes from store state
    const users = useSelector(state => state.like.likes.users);

    useEffect(() => {
        dispatch(fetchLikesThunk(post_id));    //update store state when rendered the first time
    }, [dispatch]);
    // console.log("im username", username)
    const handleShowLike = () => {      //based on like store state, add or remove like accordingly when click the button
        setshowlike(!showlike)
    };

    return (
        <div>
            <div>
                <button className='showLikeButton' onClick={handleShowLike} style={{ color: isLiked ? 'red' : 'grey', border: 'none', background: 'none' }}>
                    <FaRegHeart size={20} />
                    {likesCount}
                </button>
            </div>
            <div className="user-liked-the-post">
                {showlike && users && users.length > 0 ? (
                    <ul style={{ color: 'white' }}>
                        {users.map((user, index) => (
                            <li key={index}>{user[1]}</li>
                        ))}
                    </ul>
                ) : (
                    <></>
                )}
            </div>

        </div>
    );
};

export default LikeShow;
