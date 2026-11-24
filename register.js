const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("registerMessage");

    try {

        const data = await apiRequest("/auth/register", {
            method: "POST",

            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        message.textContent = data.message;
        message.style.color = "green";

        registerForm.reset();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    } catch (error) {

        message.textContent = error.message;
        message.style.color = "red";

    }

});