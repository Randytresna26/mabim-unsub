function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "ALGACORI" && password =="ALGACORI"){
            if(confirm("Apakah anda ingin login?") == true){
                window.location.href = "https://github.com/Randytresna26/mabim-unsub.git.git8"
            } else {
                alert("Login dibatalkan !");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
}