
function back(){
    location=("directory.html");
}




function add_directory(form){

    var name = form.name.value;
    var contact = form.contact.value;
    var address = form.address.value;

    
        
    xhr = new XMLHttpRequest();
    var url = "https://cryptic-fjord-60133.herokuapp.com/api/add_directory";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.name + ", " + json.contact + ", " + json.address);
        }
    }
    var json =JSON.stringify({"name": name, "contact":contact, "address":address});
    console.log(json)
    xhr.send(json);


    
    location="directory.html"  
    alert("Thanks ! " + name  + " is successfully added to your Directory.");
    

}


// function get_req(form){

//     var what_ever = form.wtevr.value;

//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://127.0.0.1:5000/what_ever");
//     xhr.send();

//     console.log(xhr.status);
//     console.log(xhr.statusText);

// }
