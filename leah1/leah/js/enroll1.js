function goto_enroll(form) {
	xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:5000/api/add_class";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            alert("hey");
            console.log(json.form.classname.value);
        }
    }
    var json =JSON.stringify({"classname":form.classname.value});
    console.log(json)
    xhr.send(json);

    location="enroll.html";
    alert("Thanks " + form.classname.value  + "! Successfully added.");
}

function goto_home() {
	location = "enroll_home.html";
}

function goto_class2() {
	location="index.html";
}


