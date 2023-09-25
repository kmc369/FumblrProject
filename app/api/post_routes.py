from flask import Blueprint, jsonify, request #jsonify???? Do we need to use to send all responses with jsonify? 
from flask_login import login_required
from app.models import TextPost, db
from ..forms import PostForm


post_bp = Blueprint('text_posts', __name__)


@post_bp.route('/')
def all_posts():
    """
    Retrieve All Posts:
    This route retrieves all posts from the database and returns them as a JSON list.
    """
    all_posts = TextPost.query.all()
    post_lists = []
    for post in all_posts:
        post_dict = post.to_dict()
        post_lists.append(post_dict)
    return jsonify({"Posts": post_lists})
    
@post_bp.route('/user_posts/<int:id>')
# @login_required
def user_textposts(id):
    """
    Retrieve User's Posts:
    This route retrieves all posts created by a specific user based on their user ID and returns them as a JSON list.
    """
    posts_by_user = TextPost.query.filter_by(user_id=id).all()
    post_list = []
    if not posts_by_user:
        return post_not_found_error(404)
    for post in posts_by_user:
        post_dict = post.to_dict()
        # print(post_dict)
        post_list.append(post_dict)
    return jsonify({ "Posts": post_list})

@post_bp.route("/posts/<int:id>")
def post_details(id):
    """
    Retrieve Post Details by ID:
    This route retrieves the details of a post by its ID and returns them as a JSON dictionary.
    """
    post_by_id = TextPost.query.get(id)
    if post_by_id is None:
        return post_not_found_error(404)
    post_dict = post_by_id.to_dict()
    return jsonify(post_dict)

@post_bp.route("/new_post", methods=["POST"])
def new_post_textpost():
    """
    Create a New Text Post:
    This route handles the creation of a new post.
    - For POST requests, it validates the form data, creates a new TextPost object, and adds it to the database.
    - For any validation errors or any issues during post creation, it returns a JSON response with error messages and a 400 status code.
    """
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_post = TextPost(
            title = form.data["title"],
            text_content = form.data['text_content'],
            user_id = form.data['user_id'], #change to have user id come in from the session
        )
        
        db.session.add(new_post)
        db.session.commit()
        return jsonify(new_post.to_dict(), 201)
    return form_validation_error(form.errors)
    
    
@post_bp.route("/posts/<int:id>/update", methods=["PUT"])
def update_textpost(id):
    """
    Update an Existing Text Post:
    This route handles the updating of an existing post identified by its post's ID.
    It accepts a PUT request with the necessary form data to update the post.
    """
    post_to_update = TextPost.query.get(id)
    if post_to_update is None:
        return post_not_found_error(404)
    update_data = request.get_json()
    if update_data["title"]:
        post_to_update.title = update_data["title"]
    if update_data["text_content"]:
        post_to_update.text_content = update_data['text_content']
    if update_data["user_id"]:
        post_to_update.user_id = update_data['user_id']
    db.session.commit()
    return jsonify(post_to_update.to_dict())


@post_bp.route("/posts/<int:id>/delete", methods=["DELETE"])
def delete_textposts(id):
    """
    Delete a Text Post:
    This route handles the deletion of a post identified by its post's ID.
    It accepts a DELETE request to remove the post from the database.
    """
    post_to_delete = TextPost.query.get(id)
    if post_to_delete is None:
        return post_not_found_error(404)
    db.session.delete(post_to_delete)
    db.session.commit()
    return jsonify({"message": "Post has been successfully deleted"})

@post_bp.errorhandler(404)
def post_not_found_error(error_dict):
    """
    This error handler is used when a requested resource is not found (404 error).
    It returns a JSON response with a 404 status code and a message indicating that 
    the requested resource could not be found.
    """
    return jsonify({"message": "Post not found"}, 404)

@post_bp.errorhandler(400)
def form_validation_error(error):
    """
    This error handler is used to handle form validation errors (400 Bad Request). 
    It takes the form validation errors and constructs a JSON response
    with an error message and detailed form errors.
    """
    form_error_response = {
        "message": "Form validation failed",
        "errors": error.description 
    }
    return jsonify(form_error_response, 400)
