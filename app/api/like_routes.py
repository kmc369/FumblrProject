from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Like, db, TextPost
from app.forms import LikeForm

likes_bp = Blueprint('likes', __name__)


def count_like(post_id):
    """
    helper function to count number of likes
    """
    post = TextPost.query.get_or_404(post_id)
    return len(post.likes)


@likes_bp.route('/post/<int:post_id>', methods=['GET'])
def get_num_likes(post_id):
    """
    Route to get all likes for a given post.
    """
    post = TextPost.query.get_or_404(post_id)  # Get the post or return 404
    likes = post.likes  # Assuming 'likes' is the relationship name on TextPost to Like model
    # Collect usernames from each like, assuming 'user' is the relationship name on Like to User model
    users = [[like.user.id, like.user.username] for like in likes]

    return jsonify(status='success', likes={'count': count_like(post_id), "users": users})


@likes_bp.route('/post/<int:post_id>', methods=['POST'])
def like_post(post_id):
    # to validate if current post exists searched by post_id
    post = TextPost.query.get_or_404(post_id)
    user_id = request.get_json().get('user_id')
    if user_id:
        liked = Like.query.filter_by(
            user_id=user_id, post_id=post_id).first()  # to check if current user likes the post or not, by search a match for user_id and post_id
        if not liked:  # if current user hasn't liked the post, add like. Otherwise do nothing to database
            like = Like(user_id=user_id, post_id=post_id)
            db.session.add(like)
            db.session.commit()
        post = TextPost.query.get_or_404(post_id)
        likes = post.likes
        users = [[like.user.id, like.user.username] for like in likes]
        return jsonify(status='success', likes={'count': count_like(post_id), "users": users})
    return jsonify(status='error', error='User ID is required'), 400


@likes_bp.route('/post/<int:post_id>', methods=['DELETE'])
def unlike_post(post_id):
    post = TextPost.query.get_or_404(post_id)
    user_id = request.get_json().get('user_id')
    if user_id:
        like = Like.query.filter_by(user_id=user_id, post_id=post_id).first()
        if like:
            db.session.delete(like)
            db.session.commit()
            post = TextPost.query.get_or_404(post_id)
            likes = post.likes
            users = [[like.user.id, like.user.username]
                     for like in likes]
            return jsonify(status='success', likes={'count': count_like(post_id), "users": users})
        return jsonify(status='error', error='Like not found'), 404
    return jsonify(status='error', error='User ID is required'), 400
