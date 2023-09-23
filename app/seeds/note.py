from app.models import db, Note, environment, SCHEMA
from sqlalchemy.sql import text

def seed_notes():
    note1 = Note(
        content = 'Love!!',
        user_id = 2,
        post_id = 1
    )
    
    note2 = Note(
        content = 'Nice post!',
        user_id =1, 
        post_id = 2
    )
    
    note3 = Note(
        content = 'I love Greys Anatomy too!',
        user_id =1,
        post_id = 3
    )
    note4 = Note(
        content = 'This is a comment on a post for post 1',
        user_id = 2,
        post_id = 1
    )
    db.session.add(note1)
    db.session.add(note2)
    db.session.add(note3)
    db.session.add(note4)
    db.session.commit()
    
def undo_notes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM notes"))
        
    db.session.commit()