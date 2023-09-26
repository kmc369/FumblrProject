import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLikesThunk } from '../../store/like';

const AccountDropdown = ({ post_id, user_id, usernames }) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const isLiked = useSelector(state => state.like.likes.user_liked);
    console.log("im isssslaik", isLiked)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        dispatch(fetchLikesThunk());
    }, [dispatch]);

    const handleLikesClick = async e => {
        e.preventDefault();
        history.push('/liked-posts');
    };

    const handleLogout = () => {

        history.push('/');
    };

    return (
        <div>
            <button onClick={toggleMenu}>
                Account ▼
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <span onClick={handleLikesClick}>Likes</span>
                    {/* <span className="like-count">{likedPostsCount}</span> */}
                    <li>Following</li>
                    {/* <li>Live Stream Credits</li> */}
                    <li onClick={handleLogout}>Logout</li>
                </ul>
            )}

        </div>
    );
};

export default AccountDropdown;

