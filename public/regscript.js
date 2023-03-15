

function validateemaillogin() {

    var email = document.getElementById("email_login").value;
    console.log(email);
    fetch(`/email?email=${email}`).then
        (res => res.json()).then
        (data => {
            console.log(data);
            if (data.exist) {
              
            
            } else {
                document.getElementById("emailerr").innerHTML = "email not register plz register your self";
               
            }
        })


}






