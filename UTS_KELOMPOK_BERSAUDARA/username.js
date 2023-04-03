function saveUsername() {
    var username = document.getElementById("username").value;
    document.getElementById("Display-username").innerHTML = "Username: " + username;
    localStorage.setItem("savedUsername", username);
}

window.onload = function() {
    var savedUsername = localStorage.getItem("savedUsername");
    if (savedUsername !== null) {
        document.getElementById("Display-username").innerHTML = "Username: " + savedUsername;
    }
    };

