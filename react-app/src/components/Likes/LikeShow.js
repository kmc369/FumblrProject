import './LikeShow.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { fetchLikesThunk, addLikeThunk, removeLikeThunk } from '../../store/like';


const LikeShow = ({ post_id, openComments }) => {
    const [isLiked, setisLiked] = useState(false);
    const [showlike, setshowlike] = useState(false);
    const dispatch = useDispatch();
    const likes = useSelector(state => state.like.likes[post_id]);    //number of likes from store state
    let users = null;
    let likesCount = null;

    if (likes) {
        users = likes.users;
        likesCount = likes.count;
    }

    useEffect(() => {
        dispatch(fetchLikesThunk(post_id));    //update store state when rendered the first time
    }, [dispatch]);
    // console.log("im username", username)
    const handleShowLike = () => {      //based on like store state, add or remove like accordingly when click the button
        setshowlike(!showlike)
    };
    // console.log(users)
    return (
        <div>
            <div>
                <button className='showLikeButton' onClick={handleShowLike} style={{ color: likesCount ? 'red' : 'black' }}>
                    {likesCount ? <FaHeart /> : <FaRegHeart />}
                    {likesCount}
                </button>
            </div>
            <div className="user-liked-the-post">
                {showlike && users && users.length > 0 ? (
                    <ul>
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
