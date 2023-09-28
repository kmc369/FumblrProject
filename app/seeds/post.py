from app.models import db, TextPost, environment, SCHEMA
from sqlalchemy.sql import text


def seed_post():
    post1 = TextPost(
        title='Hello World',
        text_content="Today was a great day world",
        user_id=1,
        second_content="https://64.media.tumblr.com/101eb3ce4682ac4887ffd1b7a13aa7a5/68d496d5c9c35370-f8/s2048x3072/3f2d2e85d6b645b5265d68cc3b6cf10f414ba757.pnj",
        post_type="photo"
    )

    post2 = TextPost(
        title='Greys Anatomy',
        text_content="We love doctor mc dreamy",
        user_id=2,
        # second_content=""
        post_type="text"

    )

    post3 = TextPost(
        title='Checkout my airbnb',
        text_content="A private hillside suite nestled among oaks",
        second_content="https://a0.muscache.com/im/pictures/de72f0c1-418d-4dfd-9b10-6ec61cdc6e81.jpg?im_w=1200",
        user_id=2,
        # second_content="",
        post_type="photo"
    )

    post4 = TextPost(
        title='Edinburgh, Scotland (by Julia Solonina)',
        text_content="Taking long walks and enjoying nature.",
        second_content="https://64.media.tumblr.com/1905817655045676089ddca77e499322/f587b2edd200bf40-52/s2048x3072/c35098e8a5eb0fedde104e90f9954613b60dfa48.jpg",
        user_id=1,
        post_type="photo"
    )

    post5 = TextPost(
        title='Aquarium Wonders',
        text_content="I'm awating for you in Monterey Bay Aquarium",
        second_content="https://i.ytimg.com/vi/025Y3Zip0Qs/maxresdefault.jpg",
        user_id=1,
        post_type="photo"
    )

    post6 = TextPost(
        title='Journey Through Italy',
        text_content="Experiencing culture, history, and exquisite food.",
        user_id=1,
        post_type="text"
    )

    post7 = TextPost(
        title='Siamese Cat',
        text_content="One of the best-known cat breeds, the Siamese is curious, smart, vocal and demanding. If you want a cat who will converse with you all day long, the Siamese may be your perfect match. The Siamese weighs six to 10 pounds and has a distinctive coat with dark “points” on a light background.",
        second_content="https://cdn-images.vetstreet.com/e6/75/714c36604fc0aefcc5df187a06b9/Siamese-AP-U2BPOE-645sm3614.jpg",
        user_id=2,
        post_type="photo"
    )

    post8 = TextPost(
        title='Exploration of Quantum Physics',
        text_content="Delving into the mysteries of the quantum realm.",
        user_id=1,
        post_type="text"
    )

    post9 = TextPost(
        title='Gardening 101',
        text_content="The basics of keeping a home garden.",
        user_id=1,
        post_type="text"
    )

    post10 = TextPost(
        title='Knitting Adventures',
        text_content="Creating warm memories, one stitch at a time.",
        second_content="https://www.annasofiavintersol.com/cdn/shop/products/Eng_Cover_00_1080x.png?v=1648078169",
        user_id=3,
        post_type="photo"
    )

    post11 = TextPost(
        title='Exploring Virtual Reality',
        text_content="The new dimensions of digital interaction.",
        user_id=1,
        post_type="text"
    )

    post12 = TextPost(
        title='The Age of AI',
        text_content="Understanding the rise of machine learning.",
        user_id=6,
        post_type="text"
    )

    post13 = TextPost(
        title='Morning Yoga Routine',
        text_content="Relieves stress for more chill vibes in your day;Combats depression;Reduces inflammation;Improves overall fitness",
        user_id=1,
        post_type="text"
    )

    post14 = TextPost(
        title='my new house!',
        text_content="beautiful lake view",
        second_content="https://a0.muscache.com/im/pictures/miso/Hosting-45380567/original/6f80d07d-b69b-4a80-a792-40f82c222937.jpeg?im_w=1440",
        user_id=3,
        post_type="photo"
    )

    post15 = TextPost(
        title='The Magic of Reading',
        text_content="Travelling through pages.",
        user_id=6,
        post_type="text"
    )

    post16 = TextPost(
        title='Literary Classics',
        text_content="Revisiting the timeless narratives.",
        user_id=3,
        post_type="text"
    )

    post17 = TextPost(
        title='The Universal Language',
        text_content="Exploring the realm of music.",
        user_id=1,
        post_type="text"
    )

    post18 = TextPost(
        title='Concert Experiences',
        text_content="Live music under the stars.",
        user_id=2,
        post_type="text"
    )

    post19 = TextPost(
        title='Cinematic Wonders',
        text_content="The magic of the big screen.",
        user_id=4,
        post_type="text"
    )

    post20 = TextPost(
        title='Documentary Explorations',
        text_content="Uncovering realities one film at a time.",
        user_id=2,
        post_type="text"
    )

    post21 = TextPost(
        title='Wildlife Wonders',
        text_content="The beautiful co-existence of flora and fauna.",
        second_content="https://scx1.b-cdn.net/csz/news/800a/2018/5b72d32411ce7.jpg",
        user_id=3,
        post_type="photo"
    )

    post22 = TextPost(
        title='Hiking Trails',
        text_content="Discovering paths less traveled.",
        user_id=2,
        post_type="text"
    )

    post23 = TextPost(
        title='Modern Art Movements',
        text_content="The evolving expressions of creativity.",
        user_id=4,
        post_type="text"
    )

    post24 = TextPost(
        title='Historical Artistry',
        text_content="A journey through artistic eras.",
        user_id=5,
        post_type="text"
    )

    post25 = TextPost(
        title='Philosophical Musings',
        text_content="Pondering life's big questions.",
        user_id=5,
        post_type="text"
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.add(post7)
    db.session.add(post8)
    db.session.add(post9)
    db.session.add(post10)
    db.session.add(post11)
    db.session.add(post12)
    db.session.add(post13)
    db.session.add(post14)
    db.session.add(post15)
    db.session.add(post16)
    db.session.add(post17)
    db.session.add(post18)
    db.session.add(post19)
    db.session.add(post20)
    db.session.add(post21)
    db.session.add(post22)
    db.session.add(post23)
    db.session.add(post24)
    db.session.add(post25)

    db.session.commit()


def undo_post():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.text_posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM text_posts"))

    db.session.commit()
