const createBlogForm = document.getElementById("createBlogForm");

createBlogForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const message = document.getElementById("blogMessage");

    // Get login token
    const token = sessionStorage.getItem("token");

    // Check login
    if (!token) {
        message.textContent = "Please login first";
        message.style.color = "red";
        return;
    }

    try {

        const data = await apiRequest("/blogs", {

            method: "POST",

            headers: {
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                title,
                content
            })

        });

        message.textContent = data.message;
        message.style.color = "green";

        createBlogForm.reset();

    } catch (error) {

        message.textContent = error.message;
        message.style.color = "red";

    }

});