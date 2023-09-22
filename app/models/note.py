from .db import db
from datetime import datetime

class Note(db.Model):
    __tablename__ = 'notes'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.String(255), db.ForeignKey("users.id"), nullable=False)
    post_id = db.Column(db.String(255), db.ForeignKey("posts.id"))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = db.relationship("User", back_populates="notes")
    posts = db.relationship("TextPost", back_populates="notes")

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        } 