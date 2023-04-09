function checkInfo(usname, pswrd){
        var usname = document.getElementById("usname").value;
        var pswrd = document.getElementById("pswrd").value;

    if(usname = ""){
        document.getElementById("warning").innerHTML = "Enter your username";
        alert("Login Error");
    }
    else if(pswrd = ""){
        document.getElementById("warning").innerHTML = "Enter your password";
        alert("Login Error");
    }
    else if((usname&&pswrd) = ""){
        alert("Login Error");
        document.getElementById("warning").innerHTML = "Enter your username and password";
    }
    else{
        alert("Login Successful");
    }
}