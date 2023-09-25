import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPostsThunk } from '../../store/search';
import { useHistory, useParams } from 'react-router-dom';

const SearchResults = () => {
    const {searchItem} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const posts = useSelector(state => state.search.posts);

    useEffect(() => {
        dispatch(searchPostsThunk(searchItem));
    }, [dispatch, searchItem])

    const handlePostClick = (postId) => {
        history.push(`/post/${postId}`);
    };

    return (
        <div>
        {posts && posts.map(post => (
            <div key={post.id} onClick={() => handlePostClick(post.id)}>
                <h3>{post.title}</h3>
                <p>{post.user.username}</p>
                <p>{post.text_content}</p>
            </div>
        ))}
    </div>
    )
}

export default SearchResults