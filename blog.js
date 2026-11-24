async function loadBlogs() {

    const blogContainer = document.getElementById("blogContainer");

    try {

        const blogs = await apiRequest("/blogs");

        blogContainer.replaceChildren();

        if (blogs.length === 0) {
            blogContainer.textContent = "No blogs available.";
            return;
        }

        blogs.forEach(function(blog) {

            const card = document.createElement("div");
            const title = document.createElement("h3");
            const content = document.createElement("p");
            const author = document.createElement("small");

            title.textContent = blog.title;
            content.textContent = blog.content;

            author.textContent =
                "Author: " + (blog.author?.name || "Unknown");

            card.appendChild(title);
            card.appendChild(content);
            card.appendChild(author);

            blogContainer.appendChild(card);

        });

    } catch (error) {

        blogContainer.textContent = error.message;

    }

}

loadBlogs();