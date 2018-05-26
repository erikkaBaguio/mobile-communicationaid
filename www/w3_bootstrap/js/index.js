//alert("hello world ");

// function change(.message a){

//     src='https://code.jquery.com/jquery-3.3.1.min.js'
//     $('.message a').click(function(){
//      $('form').animate({height:"toggle", opacity:"toggle"}, "slow");
//     });

// }
// change;
function get_info(){
    var acc_id = localStorage.getItem("acc_id");
    
    var url  = "https://api-pic-a-talk.herokuapp.com/api/user/"+acc_id;
    var xhr  = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            
            console.log(json);
            localStorage.setItem('acc_name', json.user.username);
            localStorage.setItem('acc_email', json.user.email);
            localStorage.setItem('acc_type', json.user.acc_type);
            var acc_type = localStorage.getItem("acc_type");
            if (acc_type == 1){
                location = "mode.html"
            }
            else if(acc_type == 2) {
                location = "t_mode.html"
            }  

            console.table(json);
            
        } else {
            console.error(json);
        }
    }
    xhr.send(null);
    // var url  = "https://mighty-badlands-16603.herokuapp.com/api/user/"+acc_id;
    // var xhr  = new XMLHttpRequest()
    // xhr.open('GET', url, true)
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState == 4 && xhr.status == "200") {
    //         var users = JSON.parse(xhr.responseText);
    //         localStorage.setItem('acc_name', json.username);
    //         localStorage.setItem('acc_email', json.email);
    //         console.log(json);
    //         alert("success")
    //     } else {
    //         alert('igit')
    //         console.log("FAIL");
    //     }
    // }

    // xhr.send();
    
}


function back(){
    location=("index.html");
}

function pasuser(form) {
    
    var uid = form.id.value;
    var pass = form.pass.value;
    
    xhr = new XMLHttpRequest();
    var url = "https://api-pic-a-talk.herokuapp.com/api/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa(uid + ":" + pass));
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            
            localStorage.clear();
            localStorage.setItem('acc_id', json.acc_id);
            localStorage.setItem('token', json.token);
            console.log(json.token);
            get_info();
            alert(" Successfully login");
            

            console.log(json);
        }
    }
    
    var json =JSON.stringify({"username": uid, "password":pass});
    console.log(json)
    xhr.send(json);
    


    
}


function register_user(form,acc_type){
       
    xhr = new XMLHttpRequest();
    var url = "https://api-pic-a-talk.herokuapp.com/api/signup";
    xhr.open("POST", url, true);
    // xhr.setRequestHeader("Authorization", 'Basic ' + btoa(form.id.value + ":" + form.pass.value));
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.status)
            alert("success")
            var json = JSON.parse(xhr.responseText);
              
            console.log(json.form.id.value +", " + json.form.acc_type.value + ", " + json.form.email.value + ", " + json.form.pass.value);
        }
    }
    var json =JSON.stringify({"username": form.id.value,"acc_type":form.acc_type.value, "email":form.email.value, "password":form.pass.value});
    console.log(json)
    xhr.send(json);

    location="mode.html";
    alert("Thanks " + form.id.value  + "! You are now Registered.");
    

}



function add_directory(form){

    var name = form.name.value;
    var contact = form.contact.value;
    var address = form.address.value;

    
        
    xhr = new XMLHttpRequest();
    var url = "https://cryptic-fjord-60133.herokuapp.com/directory";
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


    
    location="enroll_home.html"  
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
