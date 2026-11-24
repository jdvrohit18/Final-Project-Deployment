const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("loginMessage");

    try {

        const data = await apiRequest("/auth/login", {
            method: "POST",

            body: JSON.stringify({
                email,
                password
            })
        });

        // Save token for this browser session
        sessionStorage.setItem("token", data.token);

        // Save user information for display
        sessionStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );

        message.textContent = data.message;
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } catch (error) {

        message.textContent = error.message;
        message.style.color = "red";

    }

});