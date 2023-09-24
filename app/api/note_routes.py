from flask import Blueprint, jsonify,request
from flask_login import login_required
from app.models import Note, db
from app.forms import NoteForm

##ADD YOURE ERROR CHECKS 

notes_bp = Blueprint('text_notes', __name__)



@notes_bp.route("/post/<int:id>/notes/get",methods= ["GET"])
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

@notes_bp.route("/notes/<int:id>", methods=["PUT"])
def edit_note(id):

    edit_note = Note.query.get(id)
    if edit_note is None:
        return "Note not found", 404


   
    data = request.get_json()


    if 'content' in data:
        edit_note.content = data['content']
       
    db.session.commit()

    return edit_note.to_dict()

@notes_bp.route("/note/<int:id>", methods=["GET"])
def get_note(id):
    """get a single note by id"""
    note = Note.query.get(id)
    return note.to_dict()


@notes_bp.route("/delete/note/<int:id>",methods=["DELETE"])
def delete_note(id):
    """deleting a comment by comment id"""
    note = Note.query.get(id)
    if note is None:
        return jsonify(error="Note not found"), 404
    db.session.delete(note)
    db.session.commit()
    return "Successfully Deleted"
    
    
    


@notes_bp.route("/post/<int:id>/notes",methods= ["POST"])
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










    
