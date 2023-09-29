from app.models import db, Note, environment, SCHEMA
from sqlalchemy.sql import text


def seed_notes():
    note1 = Note(
        content='Love!!',
        user_id=2,
        post_id=1
    )

    note2 = Note(
        content='Nice post!',
        user_id=1,
        post_id=2
    )

    note3 = Note(
        content='I love Greys Anatomy too!',
        user_id=1,
        post_id=3
    )
    note4 = Note(
        content='Burke is the best!',
        user_id=4,
        post_id=2
    )
    note5 = Note(
        content="I'm going!",
        user_id=4,
        post_id=3
    )
    
    note6 = Note(
        content="awesome post this is so amazing!",
        user_id=4,
        post_id=5
    )
    note7 = Note(content="I appreciate your thoughtful perspective on this topic. Well said!", user_id=1, post_id=5)
    note8 = Note(content="Excellent analysis! Your insights add great value to the discussion.", user_id=2, post_id=5)
    note9 = Note(content="I agree with your points. This discussion is getting more interesting.", user_id=3, post_id=5)
    
    note10 = Note(content="Your insights on this matter are enlightening. I completely agree!", user_id=2, post_id=6)
    note11 = Note(content="I hadn't considered that perspective before. Thanks for sharing your thoughts.", user_id=3, post_id=6)
    note12 = Note(content="Interesting point! It adds a new dimension to our discussion.", user_id=1, post_id=6)

# Create notes for post_id = 7
    note13 = Note(content="Your post on topic 7 is quite informative. I enjoyed reading it!", user_id=1, post_id=7)
    note14 = Note(content="I have a similar viewpoint regarding topic 7. Let's explore it further.", user_id=2, post_id=7)
    note15 = Note(content="Well done! Your contribution to the discussion about topic 7 is valuable.", user_id=3, post_id=7)

# Create notes for post_id = 8
    note16 = Note(content="I resonate with your thoughts on topic 8. It's an important aspect to consider.", user_id=1, post_id=8)
    note17 = Note(content="Your perspective on topic 8 is intriguing. Let's delve deeper into this.", user_id=2, post_id=8)
    note18 = Note(content="Great insights! Your comment about topic 8 is thought-provoking.", user_id=3, post_id=8)

# Create notes for post_id = 9
    note19 = Note(content="Your post about topic 9 is well-articulated. I appreciate your analysis.", user_id=1, post_id=9)
    note20 = Note(content="I hadn't considered that angle on topic 9. Thanks for expanding the discussion.", user_id=2, post_id=9)
    note21 = Note(content="Spot on! Your insights into topic 9 are spot-on and add depth to our conversation.", user_id=3, post_id=9)

# Create notes for post_id = 10
    note22 = Note(content="I completely agree with your stance on topic 10. Well expressed!", user_id=1, post_id=10)
    note23 = Note(content="Your viewpoint on topic 10 resonates with mine. Let's explore it further.", user_id=2, post_id=10)
    note24 = Note(content="Well said! Your comment on topic 10 brings clarity to the discussion.", user_id=3, post_id=10)

# Create notes for post_id = 11
    note25 = Note(content="Kudos for addressing topic 11. Your insights are crucial to our understanding.", user_id=1, post_id=11)
    note26 = Note(content="Your perspective on topic 11 is intriguing. I'd like to hear more of your thoughts.", user_id=2, post_id=11)
    note27 = Note(content="Great analysis of topic 11! Your comment adds valuable information to the discussion.", user_id=3, post_id=11)

    db.session.add(note1)
    db.session.add(note2)
    db.session.add(note3)
    db.session.add(note4)
    db.session.add(note5)
    db.session.add(note6)
    db.session.add(note7)
    db.session.add(note8)
    db.session.add(note9)
    db.session.add(note10)
    db.session.add(note11)
    db.session.add(note12)
    db.session.add(note13)
    db.session.add(note14)
    db.session.add(note15)
    db.session.add(note16)
    db.session.add(note17)
    db.session.add(note18)
    db.session.add(note19)
    db.session.add(note20)
    db.session.add(note21)
    db.session.add(note22)
    db.session.add(note23)
    db.session.add(note24)
    db.session.add(note25)
    db.session.commit()


def undo_notes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM notes"))

    db.session.commit()
