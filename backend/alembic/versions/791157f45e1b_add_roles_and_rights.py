"""Add roles and permissions

Revision ID: 791157f45e1b
Revises: 248a867312b4
Create Date: 2024-02-28 23:21:25.756853

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '791157f45e1b'
down_revision = '248a867312b4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('permission',
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.PrimaryKeyConstraint('name'),
    sa.UniqueConstraint('name')
    )
    op.create_table('role',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('now()'), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('flathubuser_role',
    sa.Column('flathubuser_id', sa.Integer(), nullable=True),
    sa.Column('role_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['flathubuser_id'], ['flathubuser.id'], ),
    sa.ForeignKeyConstraint(['role_id'], ['role.id'], )
    )
    op.create_table('role_permission',
    sa.Column('role_id', sa.Integer(), nullable=True),
    sa.Column('permission_name', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['permission_name'], ['permission.name'], ),
    sa.ForeignKeyConstraint(['role_id'], ['role.id'], )
    )
    op.alter_column('directuploadapp', 'created_at',
               existing_type=postgresql.TIMESTAMP(),
               nullable=False,
               existing_server_default=sa.text("'2024-02-28 23:20:47.882973'::timestamp without time zone"))
    op.alter_column('moderationrequest', 'build_log_url',
               existing_type=sa.VARCHAR(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('moderationrequest', 'build_log_url',
               existing_type=sa.VARCHAR(),
               nullable=False)
    op.alter_column('directuploadapp', 'created_at',
               existing_type=postgresql.TIMESTAMP(),
               nullable=True,
               existing_server_default=sa.text("'2024-02-28 23:20:47.882973'::timestamp without time zone"))
    op.drop_table('role_permission')
    op.drop_table('flathubuser_role')
    op.drop_table('role')
    op.drop_table('permission')
    # ### end Alembic commands ###
