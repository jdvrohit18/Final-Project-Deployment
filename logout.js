document.getElementById("logoutButton")
    .addEventListener("click", function() {

        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");

        window.location.href = "login.html";

    });