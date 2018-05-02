function goto_enroll(form) {
	xhr = new XMLHttpRequest();
    var url = "https://cryptic-fjord-60133.herokuapp.com/api/add_class";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            alert("Thanks " + form.classname.value  + "! Successfully added.");
            console.log(json.form.classname.value);
        }
    }
    var json =JSON.stringify({"classname":form.classname.value});
    console.log(json)
    xhr.send(json);

    location="enroll_home.html";
}

function goto_home() {
	location = "enroll_home.html";
}

function goto_class2() {
	location="index.html";
}

function goto_classpage() {
    location="class_page.html";
}

function goto_enroll1() {
    location="enroll.html";
}

function classpage() {
    location="class_page.html";
}
