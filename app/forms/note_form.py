from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired, Email, ValidationError



class NoteForm(FlaskForm):
    content = StringField("content", validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    post_id = StringField('post_id', validators=[DataRequired()])
    
    
    
  