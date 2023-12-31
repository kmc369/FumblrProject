import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import NotePostForm from "./components/NotePostForm"
import DeleteNote from "./components/ManageNote";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";

import LikeButton from "./components/Likes/LikeButton";
import Posts from "./components/Posts";
import SpecificPost from './components/SpecificPost'
import EditPost from './components/EditPost'
import CurrentUserPosts from './components/CurrentUserPosts'
import NewPost from './components/NewPost'
import SearchBar from "./components/Search";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>


          <Route exact path="/login" >
            <LoginFormPage />
          </Route>

          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route exact path='/' component={Posts}/> */}
          <Route exact path='/posts/new' component={NewPost} />
          <Route exact path='/posts/current-user' component={CurrentUserPosts} />
          {/* <Route exact path='/posts/:postId'>
            <SpecificPost />
          </Route> */}
          {/* <Route exact path='/posts/:postId/edit' component={EditPost} /> */}
          <Route exact path="/delete/note" >
            <DeleteNote />
          </Route>


          <Route exact path="/post/:post_id/notes" >
            <NotePostForm />
          </Route>
          {/* hard coded test route, remove after integrating likes into post feature */}
          <Route exact path="/like" >
            <LikeButton post_id={1} user_id={1} />
          </Route>
          <Route exact path="/search" >
            <SearchBar />
          </Route>

          {/* //edited by WL: aviod redirect when refreshing */}
          <Route exact path='/posts/:postId'></Route>
          <Route exact path='/posts/:postId/edit'></Route>
          <Route exact path='/search/:searchItem'></Route>
          <Route exact path='/user/:userId'></Route>
          <Route exact path='/posts/:postId'></Route>
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
      )}
    </>
  );
}
export default App; 