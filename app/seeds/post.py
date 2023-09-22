from app.models import db, TextPost, environment, SCHEMA
from sqlalchemy.sql import text

def seed_post():
    post1 = TextPost(
        title = 'Hello World',
        text_content="Today was a great day world",
        user_id =1
    )
    
    post2 = TextPost(
        title = 'Greys Anatomy',
        text_content="We love doctor mc dreamy",
        user_id =2
    )
    
    post3 = TextPost(
        title = 'Greys Anatomy',
        text_content="We love doctor mc dreamy",
        user_id =2
    )
    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.commit()
    
def undo_post():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.text_posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM text_posts"))
        
    db.session.commit()