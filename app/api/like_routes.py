from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Like, db, TextPost
from app.forms import LikeForm

likes_bp = Blueprint('likes', __name__)


def count_like(post_id):
    post = TextPost.query.get_or_404(post_id)
    return len(post.likes)


@likes_bp.route('/post/<int:post_id>', methods=['GET'])
def get_num_likes(post_id):
    like_count = count_like(post_id)
    return jsonify(status='success', likes=like_count), 400


@likes_bp.route('/post/<int:post_id>', methods=['POST'])
def like_post(post_id):
    post = TextPost.query.get_or_404(post_id)
    user_id = request.form.get('user_id')
    if user_id:
        liked = Like.query.filter_by(user_id=user_id, post_id=post_id).first()
        if not liked:
            like = Like(user_id=user_id, post_id=post_id)
            db.session.add(like)
            db.session.commit()
        return jsonify(status='success', likes=count_like(post_id))
    return jsonify(status='error', error='User ID is required'), 400


@likes_bp.route('/post/<int:post_id>', methods=['DELETE'])
def unlike_post(post_id):
    post = TextPost.query.get_or_404(post_id)
    user_id = request.form.get('user_id')
    if user_id:
        like = Like.query.filter_by(user_id=user_id, post_id=post_id).first()
        if like:
            db.session.delete(like)
            db.session.commit()
            return jsonify(status='success', likes=count_like(post_id))
        return jsonify(status='error', error='Like not found'), 404
    return jsonify(status='error', error='User ID is required'), 400
