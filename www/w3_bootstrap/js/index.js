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
    var acc_type = localStorage.getItem("acc_type");
    var url  = "https://cryptic-fjord-60133.herokuapp.com/api/parent/"+acc_id;
    var xhr  = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);

            if (json.message == "no user found" && acc_type == 1){
                location = "pform.html"
            }
            
            else{
                console.log(json);
                localStorage.setItem('fname_p', json.fname_p);
                localStorage.setItem('lname_p', json.lname_p);
                localStorage.setItem('address', json.add_p);
                localStorage.setItem('birthday', json.bday_p);
                localStorage.setItem('bio_p', json.bio_p);
                localStorage.setItem('gender_p', json.gender_p);
                localStorage.setItem('p_id', json.p_id);

                var p_id = localStorage.getItem("p_id");
                alert(p_id)


                
                var d = new Date();
                var n = d.getSeconds();
                if(n==10 || n == 20 || n == 30 || n==40 || n==50  || n==0 ){
                    
                    if (acc_type == 1){
                            location = "mode.html"
                        }
                        else if(acc_type == 2) {
                            location = "t_mode.html"
                        } 
                }
                else{
                    console.log(n)
                    
                }
            
            
            

                
 

                console.table(json);
            }
            
        } 
        else if(acc_type == 2) {
            location = "t_mode.html"
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
    var url = "https://cryptic-fjord-60133.herokuapp.com/api/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", 'Basic ' + btoa(uid + ":" + pass));
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);

            if(json.message == "wrong username or password"){
                alert(json.message)
            }
            
            localStorage.clear();
            localStorage.setItem('acc_id', json.acc_id);
            localStorage.setItem('token', json.token);
            localStorage.setItem('acc_type', json.acc_type);
            localStorage.setItem('email', json.email);
            console.log(json.token);
            
            get_info();
            

            console.log(json);
        }
        
    }
    
    var json =JSON.stringify({"username": uid, "password":pass});
    console.log(json)
    xhr.send(json);
    


    
}


function register_user(form,acc_type){
       
    xhr = new XMLHttpRequest();
    var url = "https://cryptic-fjord-60133.herokuapp.com/api/signup";
    xhr.open("POST", url, true);
    // xhr.setRequestHeader("Authorization", 'Basic ' + btoa(form.id.value + ":" + form.pass.value));
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () { 

        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            
            localStorage.clear();
            localStorage.setItem('acc_id', json.acc_id);
            localStorage.setItem('acc_type', json.acc_type);
            localStorage.setItem('token', json.token);
            localStorage.setItem('email', json.email);

            if(form.acc_type.value == 1){
                location = "pform.html"
            }
            else if(form.acc_type.value == 2){
                location = "edit_t.html"
            }
              
        }

        if (xhr.status == 0){
            location = "login.html"
            alert("Sorry the app failed to load.")    
        }

        if (xhr.status == 500){
            alert("Sorry but there's some problem in our system. Please come back Later ! ")
            location = "index.html"
        }

    }
    var json =JSON.stringify({"username": form.id.value,"acc_type":form.acc_type.value, "email":form.email.value, "password":form.pass.value});
    console.log(json)
    xhr.send(json);

    
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
