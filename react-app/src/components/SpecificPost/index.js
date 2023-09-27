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

//import notes section here


const SpecificPost = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.allPosts);
    const currentUserId = useSelector(state => state.session.user.id);
    const post = posts[postId]

    useEffect(() => {
        dispatch(loadPostsThunk(postId));
    }, [dispatch]);


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    if (!post) {
        return null;
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
                {/* <LikeButton className="likes-button" post_id={post.id} /> */}
            </div>


            <div className="post-operations">
                <button className="icon-button"><FaTrash /></button>
                <button className="icon-button"><FaEdit /></button>
            </div>

            <div className="post-actions">
                <button className="icon-button"><FaShare /></button>
                <button className="icon-button"><FaCommentDots /></button>
                <button className="icon-button"><FaRetweet /></button>
                <LikeButton className="likes-button" post_id={post.id} />
            </div>

            <div className="post-footer">
                <div className="dropdown" onClick={toggleDropdown}>
                    <div className="dropdown-label">Notes</div>
                    {dropdownOpen && (
                        <div className="dropdown-options">
                            <button className="option"><FaCommentDots />Comments</button>
                            <LikeShow className="likes-show" post_id={post.id} />
                        </div>
                    )}
                </div>

            </div>
        </div>

    );

}

export default SpecificPost;

