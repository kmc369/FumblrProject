from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from wtforms.validators import DataRequired
from flask_wtf import FlaskForm
from wtforms import StringField,IntegerField
from flask_wtf.file import FileField, FileRequired,FileAllowed
from wtforms.validators import DataRequired

 
ALLOWED_EXTENSIONS = {"pdf", "png", "jpg", "jpeg", "gif"}

class PostForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    text_content = StringField("Content")
    user_id = IntegerField('User ID', validators=[DataRequired()])
    post_type = StringField("Type", validators=[DataRequired()])
    second_content = FileField("Image file", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))])




