from app.models import db, Like, environment, SCHEMA
from sqlalchemy.sql import text

def seed_likes():
    like1 = Like(
        user_id = 1,
        post_id = 2
    )
    
    like2 = Like(
        user_id =2, 
        post_id = 1
    )
    
    like3 = Like(
        user_id =1,
        post_id = 3
    )
    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.commit()
    
def undo_likes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))
        
    db.session.commit()