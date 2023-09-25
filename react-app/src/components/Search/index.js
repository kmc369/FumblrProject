import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchPostsThunk } from '../../store/search';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [searchItem, setsearchItem] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const posts = useSelector(state => state.search.posts);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchPostsThunk(searchItem));
    };

    const handlePostClick = (postId) => {
        history.push(`/post/${postId}`);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchItem}
                    onChange={(e) => setsearchItem(e.target.value)}
                    placeholder="Search Fumblr"
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {posts && posts.map(post => (
                    <div key={post.id} onClick={() => handlePostClick(post.id)}>
                        <h3>{post.title}</h3>
                        <p>{post.text_content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
