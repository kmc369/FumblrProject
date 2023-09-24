from flask import Blueprint, jsonify, redirect
from app.models import User, TextPost

search_bp = Blueprint('search', __name__)

@search_bp.route("/<user>", methods=["GET"])
def search_user_posts(user):
    searched_user = User.query.filter(User.username.like(f"%{user}%")).first()
    if searched_user is None:
        return "User could not be found"
    # user_posts = TextPost.query.filter(TextPost.user_id == searched_user.id).all()
    # post_lists = []
    # for post in user_posts:
    #     post_dict = post.to_dict()
    #     post_lists.append(post_dict)
    return redirect(f'/api/text_posts/user_posts/{searched_user.id}')
