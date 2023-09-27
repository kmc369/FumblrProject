import './PostTile.css';
import LikeButton from '../Likes/LikeButton';
import LikeShow from '../Likes/LikeShow';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShare, FaCommentDots, FaRetweet, FaEdit, FaTrash } from 'react-icons/fa';
//import notes section here


const PostTile = ({ post }) => {

    const session = useSelector(state => state.session);
    let currentUserId;
    const likesCount = useSelector(state => state.like.likes.count);

    //notesCount = likesCount + commentCount
    const notesCount = likesCount


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    if (session.user) {
        currentUserId = session.user.id
    }


    return (
        <div className="post-modal">
            <div className="post-header">
                <h3>{post.user.username}</h3>
                <p>Follow</p>
            </div>

            <div className="post-body">
                <div className='post-image'>
                    IMAGE GOES HERE
                </div>
                <div className="post-text-content">
                    {post.text_content}
                </div>
            </div>


            {currentUserId == post.user_id &&
                <div className="post-operations">
                    <button className="icon-button"><FaTrash /></button>
                    <button className="icon-button"><FaEdit /></button>
                </div>}

            <div className="post-actions">
                <button className="icon-button"><FaShare /></button>
                <button className="icon-button"><FaCommentDots /></button>
                <button className="icon-button"><FaRetweet /></button>
                <LikeButton className="likes-button" post_id={post.id} />
            </div>

            <div className="post-footer">
                <div className="dropdown">
                    <div className="dropdown-label" onClick={toggleDropdown}>Notes{notesCount}</div>
                    {dropdownOpen && (
                        <div className="dropdown-options">
                            <button className="option"><FaCommentDots />Embed Comments here</button>
                            <LikeShow className="likes-show" post_id={post.id} />
                        </div>
                    )}
                </div>

            </div>
        </div >

    );

}

export default PostTile;

