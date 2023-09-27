"""added post type key into post model

Revision ID: f4268f1f0f69
Revises: 7620c7fd023a
Create Date: 2023-09-25 17:34:13.377212

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f4268f1f0f69'
down_revision = '7620c7fd023a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('text_posts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('post_type', sa.String(length=100), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('text_posts', schema=None) as batch_op:
        batch_op.drop_column('post_type')

    # ### end Alembic commands ###