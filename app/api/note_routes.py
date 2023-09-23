from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Note, TextPost,User



notes_bp = Blueprint('text_notes', __name__)



@notes_bp.route("/post/<int:id>/notes")
def get_notes_by_post_Id(id):
    """
    all the notes for a specific post 
    """
    all_notes = Note.query.filter_by(post_id=id).all()
    notes_list = []
    for note in all_notes:
        note_dict = note.to_dict()
        notes_list.append(note_dict)
    return notes_list

@notes_bp.route("/post/<int:id>/notes",methods= ["GET","POST"])
def post_note(id):
    new_note = Note(
    content = content,
    user_id = User.id,
    post_id = id
    )


    
