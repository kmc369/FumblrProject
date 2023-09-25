import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);

	return (


		<>
	
		<div className="sidebarandnav">
        <div className="sidebar-container">
            <h1 className="tumblr-header">Fumblr</h1>
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
            <i class="fa-solid fa-user"><span className="icontext">Acount</span></i>
            </div>

            <div className="iconsandtext">
            <i class="fa-solid fa-gear"><span className="icontext">Settings</span></i>
            </div>


            <div className="iconsandtext" id="logoutIcon">
            <i class="fa-solid fa-right-from-bracket"><span  className="icontext" >Logout</span></i>
            </div>

            
        </div>

	<div className='followingandicons'>

				<div className='following'>
					<div className='followingtag'>Following</div>
					<div className='foryou'>For you</div>
					<div className='yourtags'>Your tags</div>
		</div>

	
	<div className="posttype">	
			
			
					<div className="Navicons">
					<i class="fa-solid fa-font allnavicon" style={{color:"#fff"}}></i>
					<span>Text</span>
					</div>


					<div className="Navicons">
					<i class="fa-solid fa-camera allnavicon" style={{color:"red"}}></i>
					<span>Photo</span>
					</div>

					<div className="Navicons">
					<i class="fa-solid fa-quote-left allnavicon" style={{color:"orange"}}></i>
					<span>Quote</span>
					</div>

					<div className="Navicons">
					<i class="fa-solid fa-link allnavicon" style={{color:"limegreen"}}></i>
					<span>Link</span>
					</div>

					<div className="Navicons">
					<i class="fa-solid fa-comment-sms allnavicon" style={{color:"lightblue"}}></i>
					<span>Chat</span>
					</div>

					<div className="Navicons">
					<i class="fa-solid fa-headphones allnavicon"style={{color:"purple"}}></i>
					<span>Audio</span>
					</div>

					<div className="Navicons video">
					<i class="fa-solid fa-video allnavicon"style={{color:"pink"}}></i>
					<span>video</span>
					</div>
					
			</div>


			{/* WHEN THE GET ALL POST ROUTE FOR RANDOM POST IS COMPLETE THIS IS WHERE IT WILL GO  */}


</div>
	<div className='search-div-container'>
	<label className='search-container'>

			<i className="fa-solid fa-magnifying-glass" style={{color:"rgb(165, 165, 165)"}}></i>
			<input id='search-input'
			
			placeholder='search Fumblr'>
			
			</input>
	</label>
	</div>

</div>

	<div className='homeanduser-container'>
		<ul className='homeanduser'>
				<li>
					<NavLink className= "houselink" exact to="/"> <i class="fa-solid fa-house" ></i></NavLink>
				</li>
				{isLoaded && (
					<li >
						<ProfileButton  user={sessionUser} />
					</li>
				)}
		</ul>




	</div>


	</>
	

	);
}

export default Navigation;