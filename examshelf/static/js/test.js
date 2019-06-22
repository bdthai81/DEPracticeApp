function updateEstimateTime() {
    var selectedOption = document.getElementById('numberQuestions').options[document.getElementById('numberQuestions').selectedIndex].text;
    document.getElementById("estimatedTime").innerText = parseInt(selectedOption)*2.5 + " min";
};

/**
 * Function update the total questions count element based off the checkedboxes
 */
function updateTotalQuestions() {
    // Initialize total question element
    var tqElement = document.getElementById("totalQuestions");
    // Set totalQuestions variable to 0
    var totalQuestions = 0;
    
    // Loop through all sources
    sourceData.forEach(function(source) {
        // Get all the partition elements belonging to all group source by class name
        var partCheckBoxes = document.getElementsByClassName(source.id);
        // Sum checked partition checkboxes
        Array.prototype.forEach.call(partCheckBoxes, function(partElement) {
            if(partElement.checked) {
                totalQuestions = totalQuestions + parseInt(partElement.getAttribute("qEnd")) - parseInt(partElement.getAttribute("qStart")) + 1;
            }
        });
    });
    // update total questions count element
    tqElement.innerText = totalQuestions;
    var optionElement = document.createElement("option");
    optionElement.innerText = totalQuestions;
    // Update buildForm dropdown
    document.getElementById("buildForm").innerHTML="";  // reset
    document.getElementById("buildForm").append(optionElement);     //populate new value
    // Update Number of Questions dropdown
    document.getElementById("numberQuestions").innerHTML="";  // reset
    var n = parseInt(totalQuestions/10);
    for(var i=1;i<=n;i++) {
        optionElement = document.createElement("option");
        optionElement.innerText = i*10;
        document.getElementById("numberQuestions").append(optionElement);
    };
    if(totalQuestions%10 !== 0) {
        optionElement = document.createElement("option");
        optionElement.innerText = n*10 + totalQuestions%10;
        document.getElementById("numberQuestions").append(optionElement);
    };
    // Update Estimate Time
    updateEstimateTime();
};

function sourceChecked() {
    // Get the group element to set visibility
    var grpElement = document.getElementById("grp"+this.value);
    // toggle group source visibility
    grpElement.classList.toggle("invisible");
    // reset partition checkboxes
    resetPartChecked(this.value, this.checked);
};

function resetPartChecked(sourceId, grpChecked) {
    // Get all the partition elements belonging to group source
    var partCheckBoxes = document.getElementsByClassName(sourceId);
    // Update all partition checkboxes base by group source
    Array.prototype.forEach.call(partCheckBoxes, function(partElement) {
        // Reset all group's partition checkboxes to match group source's chekbox
        partElement.checked = grpChecked ? true:false;
    });
    // update total questions count element
    updateTotalQuestions()
}

function grpChecked() {
    // reset partition checkboxes
    resetPartChecked(this.value, this.checked);
};

function partChecked() {
    // update total questions count element
    updateTotalQuestions();
};

/**
 * Function initializes the source options from sourceData.js
 */
function initSources() {
    // Loop thru sourceData and create optionSources, group, partitions
    sourceData.forEach(function(source) {
        // Create label: checkbox + source name
        var sLabel = document.createElement("label");
        sLabel.classList.add("form-check-label", "col-md-4");
        var sCheckBox = document.createElement("input");
        sCheckBox.classList.add("form-check-input");
        sCheckBox.setAttribute("type", "checkbox");
        sCheckBox.setAttribute("checked", "");
        sCheckBox.setAttribute("value", source.id);
        sCheckBox.addEventListener('change', sourceChecked);
        sLabel.appendChild(sCheckBox);
        sLabel.append(source.name);
        // Append source labels
        document.getElementById("optionSources").appendChild(sLabel);

        // Create dropdown partition source data, set of 25 questions
        // Create unorganized list
        var partUL = document.createElement("ul");
        partUL.classList.add("list-group", "list-group-flush");
        // Create partition source data, subset of 25 questions
        var n = parseInt(source.data.length/25);
        for(var i=0;i<n;i++) {
            var subset = String((i*25)+1)+"-"+String((i+1)*25);
            // var partLI = document.createElement("li");
            // partLI.classList.add("list-group-item");
            var partLabel = document.createElement("label");
            partLabel.classList.add("form-check-label");
            var partCheckBox = document.createElement("input");
            // partCheckBox.classList.add("form-check-input");
            partCheckBox.setAttribute("type", "checkbox");
            partCheckBox.setAttribute("checked", "");
            partCheckBox.setAttribute("class", source.id);
            partCheckBox.setAttribute("qStart", String((i*25)+1));
            partCheckBox.setAttribute("qEnd", String((i+1)*25));
            partCheckBox.addEventListener('change', partChecked);
            partLabel.appendChild(partCheckBox);
            partLabel.append(subset);
            // Append list of 25 questions into ul
            partUL.append(partLabel);
        };
        if(source.data.length%25 !== 0) {
            // Create partition source data, remaining questions
            var subset = String((n*25)+1)+"-"+String((n*25)+source.data.length%25);
            // var partLI = document.createElement("li");
            // partLI.classList.add("list-group-item");
            var partLabel = document.createElement("label");
            partLabel.classList.add("form-check-label");
            var partCheckBox = document.createElement("input");
            // partCheckBox.classList.add("form-check-input");
            partCheckBox.setAttribute("type", "checkbox");
            partCheckBox.setAttribute("checked", "");
            partCheckBox.setAttribute("class", source.id);
            partCheckBox.setAttribute("qStart", String((n*25)+1));
            partCheckBox.setAttribute("qEnd", String((n*25)+source.data.length%25));
            partCheckBox.addEventListener('change', partChecked);
            partLabel.appendChild(partCheckBox);
            partLabel.append(subset);
            // Append list of 25 questions into ul
            partUL.append(partLabel);
        };
        // Append sources partitions
        var grpDiv = document.createElement("div");
        grpDiv.classList.add("form-group", "col-md-6");
        grpDiv.setAttribute("id", "grp"+source.id)
        var grpCheckBox = document.createElement("input");
        grpCheckBox.classList.add("form-check-input");
        grpCheckBox.setAttribute("type", "checkbox");
        grpCheckBox.setAttribute("checked", "");
        grpCheckBox.setAttribute("value", source.id);
        grpCheckBox.setAttribute("qStart", 0);
        grpCheckBox.addEventListener('change', grpChecked);
        grpDiv.append(grpCheckBox);
        var grpBtn = document.createElement("button");
        grpBtn.setAttribute("type", "button");
        grpBtn.setAttribute("href", "#"+"data"+source.id);
        grpBtn.classList.add("btn", "btn-primary", "dropdown-toggle");
        grpBtn.setAttribute("data-toggle", "collapse");
        grpBtn.innerText = source.name;
        grpDiv.append(grpBtn);
        var colDiv = document.createElement("div");
        colDiv.setAttribute("id", "data"+source.id);
        colDiv.classList.add("form-group", "collapse");
        colDiv.append(partUL);
        grpDiv.append(colDiv);
        document.getElementById("sources").append(grpDiv);
    });
    // update total questions count element
    updateTotalQuestions()
};

initSources();

/**
 * Fisher-Yates shuffle. 
 * The idea is to walk the array in the reverse order and swap each element with a random one before it.
 * @param {*} array 
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    };
    return array;
};

function takeQuiz() {
    // Set selected option Mode
    var optionMode = document.getElementsByName("optionMode");
    for (var i = 0; i < optionMode.length; i++) {
        if (optionMode[i].checked) {
            var selectedMode = optionMode[i].value;
        };
    };
    // Set selected option Order
    var optionOrder = document.getElementsByName("optionOrder");
    for (var i = 0; i < optionOrder.length; i++) {
        if (optionOrder[i].checked) {
          var selectedOrder = optionOrder[i].value;
        };
    };

    // Generate Quiz Array
    var quizArray =[];
    // Loop through all sources
    sourceData.forEach(function(source) {
        // Get all the partition elements belonging to all group source by class name
        var partCheckBoxes = document.getElementsByClassName(source.id);
        // Sum checked partition checkboxes
        Array.prototype.forEach.call(partCheckBoxes, function(partElement) {
            if(partElement.checked) {
                for(var i=parseInt(partElement.getAttribute("qStart")); i<=parseInt(partElement.getAttribute("qEnd")); i++) {
                    quizArray.push({
                        id:source.id,
                        question: i
                    });
                };
            };
        });
    });
    // Shuffle quiz array by order if random
    if(selectedOrder === "Random") {
        quizArray = shuffle(quizArray);
    };
    // Slice array to number of questions
    var selectedOption = document.getElementById('numberQuestions').options[document.getElementById('numberQuestions').selectedIndex].text;
    quizArray = quizArray.slice(0, parseInt(selectedOption));

    // Render Quiz
    var f = document.getElementById('quizForm');
    f.quizArray.value = JSON.stringify(quizArray);
    f.mode.value = JSON.stringify(selectedMode);
    window.open('', 'quizWindow');
    f.submit();
    
};
