from flask import Flask
from flask_sqlalchemy import SQLAlchemy 

db = SQLAlchemy()

class Quote(db.Model):
    __tablename__ = 'quotes'
    id = db.Column(db.Integer, primary_key=True)
    quote = db.Column(db.String, nullable=False)
    author = db.Column(db.String, nullable=False)