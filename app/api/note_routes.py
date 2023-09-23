from flask import Blueprint, jsonify,request
from flask_login import login_required
from app.models import Note, db
from app.forms import NoteForm



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
    
    """create a note on the post """
    form = NoteForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_note = Note(
            content = form.data['content'],
            user_id = form.data['user_id'],
            post_id = form.data['post_id']
    )
        
        db.session.add(new_note)
        db.session.commit()
        return new_note.to_dict()
    ## fix the error 
    return {'error'}



    
