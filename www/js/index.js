//alert("hello world ");

// function change(.message a){

//     src='https://code.jquery.com/jquery-3.3.1.min.js'
//     $('.message a').click(function(){
//      $('form').animate({height:"toggle", opacity:"toggle"}, "slow");
//     });

// }
// change;
function back(){
    location=("index.html");
}

function pasuser(form) {
    var uid = document.getElementById("id");
    var pass = document.getElementById("pass");
    
    if (form.id.value=="ger") { 
        
        if (form.pass.value=="ronyl") {
            alert("AYYYYYYYYY");              
            location="spec.html";
        } 
        else {
            alert("Invalid Password");
        }
    } 
    else {  
         alert("Invalid UserID");
         
    }
}

function register_user(form){

    var username = form.id.value;
    var password = form.pass.value;
    var email = form.email.value;

    
        
    xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:5000/user";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.username + ", " + json.email + ", " + json.password);
        }
    }
    var json =JSON.stringify({"username": username, "email":email, "password":password});
    console.log(json)
    xhr.send(json);


    
    location="index.html";
    alert("Thanks " + username  + "! You are now Registered.");
       

}


function add_directory(form){

    var name = form.name.value;
    var contact = form.contact.value;
    var address = form.address.value;

    
        
    xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:5000/directory";
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


    
    location="class.html"  
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