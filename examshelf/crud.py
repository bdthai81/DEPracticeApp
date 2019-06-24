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
from ast import literal_eval


crud = Blueprint('crud', __name__)


# [START list]
@crud.route("/")
def test():
    return render_template("test.html")
# [END list]

# [START test_mine]
@crud.route("/mine")
@oauth2.required
def test_mine():
    exams = get_model().exams_list(session['profile']['email'])
    flashcards = get_model().flashcards_list(session['profile']['email'])

    return render_template(
        "test.html",
        exam=exams,
        flashcard=flashcards)
# [END list_mine]

# [START Quiz]
@crud.route("/quiz", methods=['GET', 'POST'])
def quiz():
    # Load variable
    if request.method == 'POST':
        # convert jsonify string back into list of dictionary
        quizArray = json.loads(request.form["quizArray"])
        mode = json.loads(request.form["mode"])

        return render_template("quiz.html", quizArray=quizArray, mode=mode)

    return render_template("quiz.html")
# [END Quiz]


# [START Flashcard]
@crud.route("/flashcard")
def flashcard():
    try:
        # Load flashcard questions list
        questionArray = get_model().flashcards_list(session['profile']['email'])
        # questionArray = get_model().flashcards_list("")

        return render_template("flashcard.html", questionArray=questionArray)
    except:
        return render_template("test.html")

# [END Flashcard]


# [START add]
@crud.route('/add', methods=['GET', 'POST'])
def add():
    if request.method == 'POST':
        content = request.get_json()

        questions = content["questions"]
        answers = content["answers"]
        user_answers = content["user_answers"]
        email = content["email"]

        data = {
            "questions": questions,
            "answers": answers,
            "user_answers": user_answers,
            "createdBy": email
        }

        # add data into exams table
        get_model().exams_create(data)

        # add missed questions into flashcards
        questions_list = literal_eval(questions)
        answers_list = literal_eval(answers)
        user_answers_list = literal_eval(user_answers)
        for i, question in enumerate(questions_list):
            if(answers_list[i] != user_answers_list[i]):
                # add missed question into flashcards table
                flashcards_data = {
                    "createdBy": email,
                    "question": question
                }
                try:
                    get_model().flashcards_create(flashcards_data)
                except:
                    # Ignore duplicates
                    pass
    # Return refresh test html page
    return "success"
# [END add]

# [START flash_del]
@crud.route('/flash_del', methods=['GET', 'POST'])
def flash_del():
    if request.method == 'POST':
        content = request.get_json()

        question = content["question"]
        email = content["email"]
        try:
            get_model().flashcards_delete(email, question)
        except:
            pass
    return "success"
    

# [END flash_del]
