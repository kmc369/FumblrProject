from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import TextPost

post_routes = Blueprint('text_posts', __name__)


@post_routes.route('/')
def all_posts():
    """
    gets all posts in db and send list of all posts dictionaries
    """
    all_posts = TextPost.query.all()
    post_lists = []
    for post in all_posts:
        post_dict = post.to_dict()
        post_lists.append(post_dict)
    return post_lists
    
@post_routes.route('/user_posts/<int:id>')
# @login_required
def user_posts(id):
    posts_by_user = TextPost.query.filter_by(user_id=id).all()
    post_list = []
    for post in posts_by_user:
        post_dict = post.to_dict()
        print(post_dict)
        post_list.append(post_dict)
    return post_list

