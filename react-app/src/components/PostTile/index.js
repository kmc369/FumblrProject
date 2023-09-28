import './PostTile.css';
import LikeButton from '../Likes/LikeButton';
import LikeShow from '../Likes/LikeShow';
import { useDispatch, useSelector,dispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaShare, FaCommentDots, FaRetweet, FaEdit, FaTrash } from 'react-icons/fa';
import NotePostForm from '../NotePostForm'
import * as NoteActions from '../../store/note'
import { useHistory } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton';
import EditPostModal from '../EditPostModal'
import DeletePost from '../DeletePost';
const PostTile = ({ post }) => {
    const history = useHistory()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [openComments, setOpenComments] = useState(false)
    const session = useSelector(state => state.session);
    const likes = useSelector(state => state.like.likes[post.id]);

    const notes1 = useSelector(state => state.note.singlePost.comment);

    // console.log("the notes are blah", notes.length)
 
    let currentUserId = null;
    let likesCount = 0;
    let notesCount = 0;
    let totalCount=0;
    const dispatch = useDispatch()
    // console.log("the current post it ",post)

    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handlePostClick = (postId) => {
        history.push(`/posts/${postId}`);
    };

    const handleComments = () => {
        setOpenComments(!openComments)
    }

    if (session.user) {
        currentUserId = session.user.id
    }

    if (likes || notes1 ) {
        likesCount = likes.count;
        notesCount = notes1 .length;
        totalCount = likesCount + notesCount
    }

    useEffect(()=>{

        const get_notes = async () =>{

           const notes =  await dispatch(NoteActions.getCommentsOfPostThunk(post.id))
          
        }

        get_notes()
    },[dispatch,post.id])

    return (
        <div className="post-modal">
            {/* <div className="post-header">
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
            </div> */}
            <div className='user-username' onClick={() => handlePostClick(post.id)}>
                {post.user.username}
            </div>
            <div className='post-title'>
                {post.title}
            </div>
            <div className='post-textContent'>
                {post.second_content ? (
                    <img className="postimages" src={post.second_content} alt="Post Image" />
                ) : (
                    <span>{post.text_content}</span>
                )}
            </div>


            {currentUserId === post.user_id &&
                <div className="post-operations">
                      <button ><FaTrash />
                       <OpenModalButton id="editPostModal" modalComponent={<DeletePost post={post}/>}/> 
                    </button>
                   
                    <button><FaEdit />
                       <OpenModalButton id="editPostModal" modalComponent={<EditPostModal post={post}/>}/> 
                    </button>
                </div>}

                {/* <OpenModalButton 
              modalComponent={<DeleteSpot spotId={element.id}  onCloseModal={() => setIsDeleteModalOpen(false)} />} */}

            <div className="post-actions">
                <button className="icon-button"><FaShare /></button>
                <button className="icon-button"><FaCommentDots /></button>
                <button className="icon-button"><FaRetweet /></button>
                <LikeButton className="likes-button" post_id={post.id} />
            </div>

            <div className="post-footer">
                <div className="dropdown">
                    <div className="dropdown-label" onClick={toggleDropdown}>{totalCount} Notes</div>
                    {dropdownOpen && (
                 
                        <div className="dropdown-options">
                           
                            <button className="option" onClick={handleComments}><FaCommentDots /></button>
                            <LikeShow className="likes-show" post_id={post.id} />
                            {openComments &&
                            <NotePostForm className="NoteformDrop" post_id={post.id}/>
                            }

                        </div>
                    )}
                </div>

            </div>
        </div >

    );

}

export default PostTile;

