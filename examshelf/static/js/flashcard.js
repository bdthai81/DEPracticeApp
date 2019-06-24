
// delete question from flashcards
function del() {
    var delBtn = this;
    var email = this.getAttribute("email");
    var question = this.value;
    
    data = {
        "email": email,
        "question": question
    }
    //ajax the JSON to the server to delete question
    $.ajax({
        type: 'POST',
        url: '/exams/flash_del',
        data: JSON.stringify(data),
        success: function(data) {
            if (data === "success") {
                // Make delete button invisible
                delBtn.classList.add("invisible");
            }
        },
        contentType: "application/json",
        dataType: 'text'
    });

}

//Add event handler to delete buttons
var delBtn = document.getElementsByName("deleteBtn");
Array.prototype.forEach.call(delBtn, function(delElement) {
    delElement.addEventListener('click', del);
});


// Loop through all sources and populate elements
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

        // Answer label
        var answerLabel = document.getElementById("answer"+source.id+qNo);
        // Add correct answer options into Answer
        for(var i=0;i<questionData.options.length;i++) {
            optionAnswer = (i + 10).toString(36).toUpperCase();
            if (questionData.answer.includes(optionAnswer)) {
                qLabel = document.createElement("label");
                qLabel.classList.add("form-check-label");
                qLabel.append(questionData.options[i]);
                // Append elements
                answerLabel.append(qLabel);
                br = document.createElement("br");
                answerLabel.appendChild(br);
            };
        };
    });
});