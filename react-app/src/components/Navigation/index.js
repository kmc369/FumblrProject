import React from 'react';
import { NavLink, Route, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import SearchBar from '../Search';
import OpenModalButton from '../OpenModalButton';
import NewPost from '../NewPost'
import Posts from '../Posts';
import SearchResults from '../SearchResults';
import CurrentUserPosts from '../CurrentUserPosts';
import QuoteForm from '../QuoteForm';
import './NavIcons.css';
import PhotoForm from '../PhotoForm';
import { logout } from '../../store/session';
import SpecificPost from '../SpecificPost';
import LinkForm from '../LinkForm'
// import AccountDropdown from './accountDropDown';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const dispatch = useDispatch()
	const history = useHistory()
	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(logout());
		history.push('/')
	  };

	return (


		<>

			<div className="sidebarandnav">
				<div className="sidebar-container">
					<NavLink exact to="/"><h1 className="tumblr-header">Fumblr</h1></NavLink>
					<div className="iconsandtext">
						<NavLink exact to='/'><i class="fa-solid fa-house"><span className="icontext">Home</span></i></NavLink>
					</div>

					<div className="iconsandtext" onClick={() => alert('Feature coming soon!')}>
						<i class="fa-solid fa-compass"><span className="icontext">Explore</span></i>
					</div>

					{/* <div className="iconsandtext">
						<i class="fa-solid fa-video"><span className="icontext">Live</span></i>
					</div> */}

					<div className="iconsandtext" onClick={() => alert('Feature coming soon!')}>
						<i class="fa-solid fa-bolt"><span className="icontext">Activity</span></i>
					</div>

					<div className="iconsandtext" onClick={() => alert('Feature coming soon!')}>
						<i class="fa-solid fa-comment-dots"><span className="icontext">Messages</span></i>
					</div>

					{/* <div className="iconsandtext">
						<i class="fa-solid fa-envelope-circle-check"><span className="icontext">Inbox</span></i>
					</div> */}
					{sessionUser &&
					<div className="iconsandtext">
						<NavLink exact to={`/user/${sessionUser.id}`}><i class="fa-solid fa-user"><span className="icontext">Account</span></i></NavLink>
					</div>
					}
					<div className="iconsandtext"onClick={() => alert('Feature coming soon!')}>
						<i class="fa-solid fa-gear"><span className="icontext">Settings</span></i>
					</div>

					{sessionUser &&
					<div className="iconsandtext" id="logoutIcon" onClick={handleLogout}>
						<i class="fa-solid fa-right-from-bracket"><span className="icontext" >Logout</span></i>
					</div>
					}


				</div>

				<div className='followingandicons'>

					<div className='following'>
						{sessionUser && <div className='followingtag'>Following</div> || <div className='followingtag'>Trending</div>  }
						{sessionUser && <div className='foryou'>For you</div> || <div className='foryou'>Staff Picks</div>}
						{sessionUser && <div className='yourtags'>Your tags</div> || <div className='yourtags'>More...</div>}
					</div>


					{sessionUser &&
					<div className="posttype">


						<div className="Navicons">

							<OpenModalButton className="Text-icon" buttonText={<i class="fa-solid fa-font allnavicon" style={{ color: "#fff" }}></i>} modalComponent={<NewPost type="text"/>} />
							<p>Text</p>
						</div>


						<div className="Navicons">
							<OpenModalButton buttonText={<i class="fa-solid fa-camera allnavicon" style={{ color: "red" }}></i>} modalComponent={<PhotoForm type="photo"/>} />
							<p>Photo</p>
						</div>

						<div className="Navicons">
							
							<OpenModalButton buttonText={<i class="fa-solid fa-quote-left allnavicon" style={{ color: "orange" }}></i>} modalComponent={<QuoteForm type="quote"/>} />
							<p>Quote</p>
						</div>

						<div className="Navicons">
							
							<OpenModalButton buttonText={<i class="fa-solid fa-link allnavicon" style={{ color: "limegreen" }}></i>} modalComponent={<LinkForm type="link"/>} />
							<p>Link</p>
						</div>

						<div className="Navicons" onClick={() => alert('Feature coming soon!')}>
							<i class="fa-solid fa-comment-sms allnavicon" style={{ color: "lightblue" }}></i>
							<span>Chat</span>
						</div> 

						<div className="Navicons" onClick={() => alert('Feature coming soon!')}>
							<i class="fa-solid fa-headphones allnavicon" style={{ color: "purple" }}></i>
							<span>Audio</span>
						</div>

						<div className="Navicons video" onClick={() => alert('Feature coming soon!')}>
							<i class="fa-solid fa-video allnavicon" style={{ color: "pink" }}></i>
							<span>video</span>
						</div>

					</div> || <></>
					}

					<Route exact path='/'>
						<Posts />
					</Route>
					<Route exact path='/search/:searchItem'>
						<SearchResults />
					</Route>
					<Route exact path='/user/:userId'>
						<CurrentUserPosts/>
					</Route>
					<Route exact path='/posts/:postId'>
						<SpecificPost/>
					</Route>


				</div>
				<div className='search-div-container'>
					<label className='search-container'>
						<SearchBar />
						{/* <i className="fa-solid fa-magnifying-glass" style={{color:"rgb(165, 165, 165)"}}></i>
			<input id='search-input'
			
			placeholder='search Fumblr'>
			
			</input> */}
					</label>
				</div>

			</div>

			<div className='homeanduser-container'>
				<ul className='homeanduser'>
					{isLoaded && (
						<li >
							<ProfileButton user={sessionUser} />
						</li>
					)}
				</ul>




			</div>

		</>


	);
}

export default Navigation;

			