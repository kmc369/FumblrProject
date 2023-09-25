from flask import Blueprint, jsonify, redirect
from app.models import User, TextPost
from sqlalchemy import or_

search_bp = Blueprint('search', __name__)

# @search_bp.route("/<user>", methods=["GET"])
# def search_user_posts(user):
#     searched_user = User.query.filter(User.username.like(f"%{user}%")).first()
#     if searched_user is None:
#         return "User could not be found"
#     # user_posts = TextPost.query.filter(TextPost.user_id == searched_user.id).all()
#     # post_lists = []
#     # for post in user_posts:
#     #     post_dict = post.to_dict()
#     #     post_lists.append(post_dict)


@search_bp.route("/<searchItem>", methods=["GET"])
def search_posts(searchItem):
    searched_user = User.query.filter(User.username.like(f"%{searchItem}%")).first()
    searched_post = TextPost.query.filter(or_(TextPost.title.ilike(
        f"%{searchItem}%"), TextPost.text_content.ilike(f"%{searchItem}%"))).all()
    if searched_user is None:
        post_lists = [post.to_dict() for post in searched_post]
        if searched_post is None:
            return jsonify(error="Post could not be found"), 404

        response_data = {
            "users": None,
            "posts": post_lists
     }

        return jsonify(response_data)
    return redirect(f'/api/text_posts/user_posts/{searched_user.id}')
