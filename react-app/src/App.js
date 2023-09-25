import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import NotePostForm from "./components/NotePostForm"
import DeleteNote from "./components/DeleteNote";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import GetAllNotes from "./components/GetAllNotes";
import EditNote from "./components/EditNote";
import LikeButton from "./components/Likes";

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
          <Route exact path="/delete/note" >
            <DeleteNote />
          </Route>

          <Route exact path="/notes/:note_id">
            <EditNote />
          </Route>

          {/* <Route exact path="/post/:post_id/notes/get" >
            <GetAllNotes />
          </Route> */}

          <Route exact path="/post/:post_id/notes" >
            <NotePostForm />
          </Route>
          {/* hard coded test route, remove after integrating likes into post feature */}
          <Route exact path="/like" >
            <LikeButton post_id={1} user_id={1} />
          </Route>
        </Switch>
      )}
    </>
  );
}
export default App; 