import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (

		<div className="sidebarandnav">
        <div className="sidebar-container">
            <h1 className="tumblr-header">tumblr</h1>
            <div className="iconsandtext">
            <i class="fa-solid fa-house"><span className="icontext">Home</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-compass"><span className="icontext">Explore</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-video"><span className="icontext">Live</span></i>
            </div>


            <div className="iconsandtext">
            <i class="fa-solid fa-bolt"><span className="icontext">Activity</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-comment-dots"><span className="icontext">Messages</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-envelope-circle-check"><span className="icontext">Inbox</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-user"><span className="icontext">Acoount</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-gear"><span className="icontext">Settings</span></i>
            </div>


            <div className="iconsandtext">
            <i class="fa-solid fa-right-from-bracket"><span className="icontext">Logout</span></i>
            </div>

            
        </div>

        <div className="posttype">
        {/* background-color: rgb(44, 44, 44); */}
        <div className="Navicons">
        <i class="fa-solid fa-font"><span>Text</span></i>
        </div>

        <div className="Navicons">
        <i class="fa-solid fa-camera"><span>Photo</span></i>
        </div>

        <div className="Navicons">
        <i class="fa-solid fa-quote-left"><span>Quote</span></i>
        </div>

        <div className="Navicons">
        <i class="fa-solid fa-link"><span>Link</span></i>
        </div>

        <div className="Navicons">
        <i class="fa-solid fa-comment-sms"><span>Chat</span></i>
        </div>

        <div className="Navicons">
        <i class="fa-solid fa-headphones"><span>Audio</span></i>
        </div>

        <div className="Navicons">
        <i class="fa-solid fa-video"><span>video</span></i>
        </div>

        </div>




		<div className='nav-container'>
		<ul >
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)}
		</ul>
		</div>
	</div>
	);
}

export default Navigation;