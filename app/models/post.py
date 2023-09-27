from .db import db,environment,SCHEMA,add_prefix_for_prod
from datetime import datetime

class TextPost(db.Model):
    __tablename__ = "text_posts"
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    text_content = db.Column(db.String(1000))
    second_content = db.Column(db.String(2000), nullable=True)
    post_type = db.Column(db.String(100), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    #relationships 
    user = db.relationship("User", back_populates="posts")
    
    # notes = db.relationship("Note", back_populates="posts")
    # likes = db.relationship("Like",back_populates="posts")

    # needed to add in cascade delete to satisfy the null constraint on likes model for post_id
    notes = db.relationship("Note", back_populates="posts", cascade="all, delete-orphan")
    likes = db.relationship("Like", back_populates="posts", cascade="all, delete-orphan")
    
    def add_prefix_for_prod(attr):
        if environment == "production":
             return f"{SCHEMA}.{attr}"
        else:
            return attr

    def to_dict(self):
        return {
            'id': self.id,
            "title": self.title,
            "text_content": self.text_content,
            "second_content": self.second_content,
            "post_type": self.post_type,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user': {
                "id": self.user.id,
                "username": self.user.username,
                "email": self.user.email
            }
        } 
    