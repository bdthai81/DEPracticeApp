// Timer
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

// Arrays
var userAnswerArray = [];
var answerArray = [];
var questionArray = [];

var endLabel = document.getElementById("end");
if(endLabel.getAttribute("mode") == "Exam") {
    // toggle group source visibility
    var grpElements = document.getElementsByName("invisibleElements");
    
    Array.prototype.forEach.call(grpElements, function(grpElement) {
        grpElement.classList.toggle("invisible");
    });
};

function end() {
    var result = 0;
    for(var i=0; i<answerArray.length; i++) {
        if(userAnswerArray[i] === answerArray[i]) {
            result++;
        };
    };

    // Submit quiz results to server
    var submitBtn = this;
    var quizForm = document.getElementById('quizForm');
    if(quizForm.email.value) {
        quizForm.questions.value = JSON.stringify(questionArray);
        quizForm.answers.value = JSON.stringify(answerArray);
        quizForm.user_answers.value = JSON.stringify(userAnswerArray);
        window.open('', 'endWindow');
        quizForm.submit();
        submitBtn.classList.add("invisible");
    };
    
    // Display results
    endLabel.innerHTML = '<font color="blue">' + "Result: "+ result + "/" + answerArray.length + ' are Correct</font>';
    
    // Enable answer button by making visible
    if(endLabel.getAttribute("mode") == "Exam") {
        // toggle group source visibility
        var grpElements = document.getElementsByName("invisibleElements");
        
        Array.prototype.forEach.call(grpElements, function(grpElement) {
            grpElement.classList.toggle("invisible");
        });
    };
};

function qSelected() {
    var answerLabel = document.getElementById("answer"+this.name);
    var resultLabel = document.getElementById("result"+this.name);
    if (this.value === answerLabel.getAttribute("value")) {
        resultLabel.innerHTML = '<font color="green">' + this.value + ' is Correct</font>';
    }
    else {
        resultLabel.innerHTML = '<font color="red">' + this.value + ' is Incorrect</font>';
    };
    // Update user choice to userAnswerArray
    userAnswerArray[answerLabel.getAttribute("index")] = this.value;
};

function qChecked() {
    var grpChecks = document.getElementsByName(this.name);
    var userAnswer = "";
    Array.prototype.forEach.call(grpChecks, function(grpCheck) {
        if(grpCheck.checked) {
            userAnswer += grpCheck.value;
        };
    });
    var answerLabel = document.getElementById("answer"+this.name);
    userAnswerArray[answerLabel.getAttribute("index")] = userAnswer;
};

// Loop through all sources
sourceData.forEach(function(source) {
    // Get all the div elements belonging to all group source by class name
    var questionsDiv = document.getElementsByClassName(source.id);
    var data = source.data;
    // Generate Questions by Source
    Array.prototype.forEach.call(questionsDiv, function(divElement) {
        var qNo = divElement.getAttribute("value");
        var questionData = data[qNo-1];
        // Generate html question elements
        var qLabel = document.createElement("label");
        qLabel.classList.add("form-check-label");
        qLabel.append(questionData.question);
        divElement.append(qLabel);
        var br = document.createElement("br");
        divElement.appendChild(br);
        br = document.createElement("br");
        divElement.appendChild(br);

        // option
        for(var i=0;i<questionData.options.length;i++) {
            qLabel = document.createElement("label");
            qLabel.classList.add("form-check-label");
            var qRadio = document.createElement("input");
            qRadio.classList.add("form-check-input");
            qRadio.setAttribute("name", source.id+qNo);
            qRadio.setAttribute("value", (i + 10).toString(36).toUpperCase());
            // Single answer: radio button
            if(questionData.answer.length == 1) {
                qRadio.setAttribute("type", "radio");
                qRadio.addEventListener('click', qSelected);
            }
            // Multiple answers: checkboxes
            else {
                qRadio.setAttribute("type", "checkbox");
                qRadio.addEventListener('change', qChecked);
            };
            
            qLabel.append(qRadio);
            qLabel.append(questionData.options[i]);
            // Append elements
            divElement.append(qLabel);
            br = document.createElement("br");
            divElement.appendChild(br);
        };

        // Answer
        var answerLabel = document.getElementById("answer"+source.id+qNo);
        answerLabel.setAttribute("value", questionData.answer);
        answerLabel.innerHTML = questionData.answer + "<br>" + questionData.explanation;
        // Append answer into answerArray and create emtpy userAnswerArray
        userAnswerArray.push("");
        answerArray[answerLabel.getAttribute("index")] = questionData.answer;
        questionArray[answerLabel.getAttribute("index")] = source.id+questionData.id;
    });
});