from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired



class PostForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    text_content = StringField("Content", validators=[DataRequired()])
    user_id = IntegerField('User ID', validators=[DataRequired()])
    
    