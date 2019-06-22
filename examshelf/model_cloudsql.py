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


# [START model]
class Exam(db.Model):
    __tablename__ = 'exams'

    id = db.Column(db.Integer, primary_key=True)
    source = db.Column(db.String(255))
    questions = db.Column(db.String(511))
    answers = db.Column(db.String(511))
    user_answers = db.Column(db.String(511))
    createdBy = db.Column(db.String(255))
    createdById = db.Column(db.String(255))
    createdDate = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    def __repr__(self):
        return "<Exam(source='%s', createdDate=%s)" % (self.source, self.createdDate)
# [END model]


# [START list]
def list(limit=10, cursor=None):
    cursor = int(cursor) if cursor else 0
    query = (Exam.query
             .order_by(Exam.source)
             .limit(limit)
             .offset(cursor))
    exams = builtin_list(map(from_sql, query.all()))
    next_page = cursor + limit if len(exams) == limit else None
    return (exams, next_page)
# [END list]


# [START read]
def read(id):
    result = Exam.query.get(id)
    if not result:
        return None
    return from_sql(result)
# [END read]


# [START create]
def create(data):
    exam = Exam(**data)
    db.session.add(exam)
    db.session.commit()
    return from_sql(exam)
# [END create]


# [START update]
def update(data, id):
    exam = Exam.query.get(id)
    for k, v in data.items():
        setattr(exam, k, v)
    db.session.commit()
    return from_sql(exam)
# [END update]


def delete(id):
    Exam.query.filter_by(id=id).delete()
    db.session.commit()


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
