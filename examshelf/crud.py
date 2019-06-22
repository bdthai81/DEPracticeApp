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

from examshelf import get_model, oauth2
from flask import Blueprint, current_app, redirect, render_template, request, \
    session, url_for
import json


crud = Blueprint('crud', __name__)


# [START list]
@crud.route("/")
def list():
    token = request.args.get('page_token', None)
    if token:
        token = token.encode('utf-8')

    exam, next_page_token = get_model().list(cursor=token)

    return render_template(
        "test.html",
        exam=exam,
        next_page_token=next_page_token)
# [END list]

# [START Quiz]
@crud.route("/quiz", methods=['GET', 'POST'])
def quiz():
    # Load variable
    if request.method == 'POST':
        # convert jsonify string back into list of dictionary
        quizArray = json.loads(request.form["quizArray"])
        mode = json.loads(request.form["mode"])
        print(mode)
        return render_template("quiz.html", quizArray=quizArray, mode=mode)
    
    return render_template("quiz.html")
# [END Quiz]


@crud.route('/<id>')
def view(id):
    exam = get_model().read(id)
    return render_template("view.html", exam=exam)


# [START add]
@crud.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        exam = get_model().create(data)

        return redirect(url_for('.view', id=exam['id']))

    return render_template("form.html", action="Add", book={})
# [END add]


@crud.route('/<id>/edit', methods=['GET', 'POST'])
def edit(id):
    exam = get_model().read(id)

    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        exam = get_model().update(data, id)

        return redirect(url_for('.view', id=exam['id']))

    return render_template("form.html", action="Edit", exam=exam)


@crud.route('/<id>/delete')
def delete(id):
    get_model().delete(id)
    return redirect(url_for('.list'))
