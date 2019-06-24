# Copyright 2015 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import datetime
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


builtin_list = list


db = SQLAlchemy()


def init_app(app):
    # Disable track modifications, as it unnecessarily uses memory.
    app.config.setdefault('SQLALCHEMY_TRACK_MODIFICATIONS', False)
    db.init_app(app)


def from_sql(row):
    """Translates a SQLAlchemy model instance into a dictionary"""
    data = row.__dict__.copy()
    data['id'] = row.id
    data.pop('_sa_instance_state')
    return data


def from_flash_sql(row):
    """Translates a SQLAlchemy model instance into a dictionary"""
    data = row.__dict__.copy()
    data.pop('_sa_instance_state')
    return data


# [START model]
class Exams(db.Model):
    __tablename__ = 'exams'

    id = db.Column(db.Integer, primary_key=True)
    questions = db.Column(db.String(511))
    answers = db.Column(db.String(511))
    user_answers = db.Column(db.String(511))
    createdBy = db.Column(db.String(255))
    createdDate = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __repr__(self):
        return "<Exams(createdDate=%s)" % (self.createdDate)

class Flashcards(db.Model):
    __tablename__ = 'flashcards'

    createdBy = db.Column(db.String(255), primary_key=True)
    question = db.Column(db.String(10), primary_key=True)

    def __repr__(self):
        return "<Flashcards(createdBy=%s)" % (self.createdBy)

# [END model]


# [START exams_ist]
def exams_list(email, limit=100):
    query = (Exams.query
             .filter(Exams.createdBy==email)
             .order_by(Exams.createdDate.desc())
             .limit(limit))
    exams = builtin_list(map(from_sql, query.all()))
    return exams
# [END exams_ist]


# [START flashcards_list]
def flashcards_list(email):
    query = (Flashcards.query
             .filter(Flashcards.createdBy==email))
    flashcards = builtin_list(map(from_flash_sql, query.all()))
    for card in flashcards:
        card['id'] = card['question'][0:2]
        card['question'] = card['question'][2:]
    return flashcards
# [END flashcards_list]


# [START exams_create]
def exams_create(data):
    exam = Exams(**data)
    db.session.add(exam)
    db.session.commit()
    
# [END exams_create]


# [START exams_read]
def exams_read(id):
    # result = Exams.query.get(id)
    # if not result:
    #     return None
    # return from_sql(result)
    return None
# [END exams_read]


# [START exams_update]
def exams_update(data, id):
    # exam = Exams.query.get(id)
    # for k, v in data.items():
    #     setattr(exam, k, v)
    # db.session.commit()
    # return from_sql(exam)
    return None
# [END exams_update]


# [START exams_delete]
def exams_delete(id):
    # Exams.query.filter_by(id=id).delete()
    # db.session.commit()
    return None
# [END exams_delete]


# [START flashcards_create]
def flashcards_create(data):
    flash = Flashcards(**data)
    db.session.add(flash)
    db.session.commit()
    
# [END flashcards_create]


# [START flashcards_read]
def flashcards_read(id):
    # result = Flashcards.query.get(id)
    # if not result:
    #     return None
    # return from_sql(result)
    return None
# [END flashcards_read]


# [START flashcards_update]
def flashcards_update(data, id):
    # flash = Flashcards.query.get(id)
    # for k, v in data.items():
    #     setattr(flash, k, v)
    # db.session.commit()
    # return from_sql(flash)
    return None
# [END flashcards_update]


# [START flashcards_delete]
def flashcards_delete(email, question):
    Flashcards.query.filter_by(createdBy=email, question=question).delete()
    db.session.commit()
# [END flashcards_delete]

def _create_database():
    """
    If this script is run directly, create all the tables necessary to run the
    application.
    """
    app = Flask(__name__)
    app.config.from_pyfile('../config.py')
    init_app(app)
    with app.app_context():
        db.create_all()
    print("All tables created")


if __name__ == '__main__':
    _create_database()
