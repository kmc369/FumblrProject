from app.models import db, Like, environment, SCHEMA
from sqlalchemy.sql import text


def seed_likes():
    like1 = Like(
        user_id=1,
        post_id=2
    )

    like2 = Like(
        user_id=2,
        post_id=1
    )

    like3 = Like(
        user_id=1,
        post_id=3
    )

    like4 = Like(
        user_id=3,
        post_id=5
    )

    like5 = Like(
        user_id=4,
        post_id=7
    )

    like6 = Like(
        user_id=5,
        post_id=10
    )

    like7 = Like(
        user_id=6,
        post_id=15
    )

    like8 = Like(
        user_id=6,
        post_id=20
    )

    like9 = Like(
        user_id=6,
        post_id=1
    )

    like10 = Like(
        user_id=4,
        post_id=1
    )

    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)
    db.session.add(like5)
    db.session.add(like6)
    db.session.add(like7)
    db.session.add(like8)
    db.session.add(like9)
    db.session.add(like10)
    db.session.commit()


def undo_likes():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.likes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM likes"))

    db.session.commit()
