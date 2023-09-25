// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { fetchLikesThunk, addLikeThunk, removeLikeThunk } from '../../store/like';


// const LikeButton = ({ post_id, user_id }) => {
//     const dispatch = useDispatch();
//     const likesCount = useSelector(state => state.like.likes.count);    //number of likes from store state
//     const isLiked = useSelector(state => state.like.likes.user_liked);  //if current user likes the post or not, from store state

//     useEffect(() => {
//         dispatch(fetchLikesThunk(post_id, user_id));    //update store state when rendered the first time
//     }, [dispatch]);

//     const handleLike = () => {      //based on like store state, add or remove like accordingly when click the button
//         if (isLiked) {
//             dispatch(removeLikeThunk(post_id, user_id));
//         } else {
//             dispatch(addLikeThunk(post_id, user_id));
//         }
//     };

//     return (
//         <button onClick={handleLike} style={{ color: isLiked ? 'red' : 'grey', border: 'none', background: 'none' }}>
//             {isLiked ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
//             {likesCount}
//         </button>
//     );
// };

// export default LikeButton;
