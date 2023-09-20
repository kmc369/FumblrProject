# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the lob-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying recent Posts.
      * So that I can easily log out to keep my information secure.

## Posts

### Create Posts

* As a logged in user, I want to be able to post new Posts.
  * When I'm on the `/new-post` page:
    * I can write and submit a new Post.
      * So that I can share my thoughts and memes with my friends.

### Viewing Posts

* As a logged in _or_ logged out user, I want to be able to view a selection of the most recent Posts.
  * When I'm on the `/Posts` page:
    * I can view the ten most recently posted Posts.
      * So that I can read and interact with the thoughts and memes of my friends.

* As a logged in _or_ logged out user, I want to be able to view a specific Post and its associated Comments and likes.
  * When I'm on the `/Posts/:id` page:
    * I can view the content of the Post, as well as the associated comments and likes.
      * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the comment.

### Updating Posts

* As a logged in user, I want to be able to edit my Posts by clicking an Edit button associated with the Post anywhere that Post appears.
  * When I'm on the `/Posts`, `/Posts/:id`, or `/users/:id/Posts` pages:
    * I can click "Edit" to make permanent changes to Posts I have posted.
      * So that I can fix any errors I make in my Posts.

### Deleting Posts

* As a logged in user, I want to be able to delete my Posts by clicking a Delete button associated with the Post anywhere that Post appears.
  * When I'm on the `/Posts`, `/Posts/:id`, or `/users/:id/Posts` pages:
    * I can click "Delete" to permanently delete a Post I have posted.
      * So that when I realize I shouldn't have publicly said something, I can easily remove it.

## Notes

### Create Notes

* As a logged in user, I want to be able to post a note on a post.
  * When I am on the `/Posts/:id/new_note` page:
    * I can write and submit a new note.
      * So I can share my opinion on that post.
     
### Viewing Notes

* As a logged in _or_ logged out user, I want to be able to view the notes associated with a Post.
  * When I am on the `/Posts/:id/notes` page:
    * I can view all the notes that are associate with the post
      * So that I can see everyone's opinion on that post

### Updating Notes

* As a logged in user, I want to be able to edit my notes on a post but clicking an edit button associated with the note anywhere the note appears.
  * When I am on the `/Notes/:id` or `/users/:id/Notes` pages:
    * I can click the edit icon to make permanent changes to the Notes I have posted.
      * So that I can fix any errors I make in my Notes
     
### Deleting Notes 

* As a logged in user, I want to be able to delete my Notes by clicking the delete button associated with the Note anywhere the Note appears.
  * When I am on the `/Posts/:id`, `Notes/:id`, or `users/:id/Notes` pages:
    * I can click the delete button to permanently delete a note I have posted
      * So that when I realize that I shouldn't have left a note on a post

## Likes

### Viewing Likes

* As a logged in user _or_ logged out user, I want to be able to view the like for a post.
  * When I am on the `/Posts` or `/Posts/:id` pages:
    * I can view the amount of likes on a post
      * So I can see how popular a post has become

### Liking a Post

* As a logged in user, I want to be able to click the like button on a post to like it.
  * When I am on the `/Posts` or `/Posts/:id` pages:
    * I can like a post by clicking the like button and increase the number of likes on a post
      * So I can show my appreciation for a post

### Unliking a Post

* As a logged in user, I want to be able to click the like button on a post I have already like to unlike it.
  * When I am on the `/Posts` or `/Posts/:id` pages:
    * I can unlike a post that I have already liked by clicking the like button and decrease the number of likes on a post
      * So I can decide that post was not as good as I though

## Search

### Search a for a User's posts

* As a logged in _or_ logged out user, I want to be able to search for posts made by a specific User
  * When I am on the `/Posts` page:
    * I can type in a search bar to find all the posts made by a specific user
      * So I can find out what they have been posting

### View the Results of the Search

* As a logged in _or_ logged out user, I want to be able to view the results of my search of a user's posts
  * When I am on the `/users/:id/Posts` page:
    * I can see all the posts that the user has created
      * So I can judge all of their posts to see if they are worthy of my likes  
