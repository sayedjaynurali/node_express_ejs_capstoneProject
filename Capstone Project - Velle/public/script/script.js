

        // Creating a New Blog
        const createButton = document.getElementById("create-button");

        // Variable i for every click
        let i = 0;

        createButton.addEventListener('click', () => {
            const bullshit = document.getElementById("BS")
            bullshit.style.display = "block";

            // Fetch the inputs for validation
            const blogImageInput = document.getElementById("blog-image-input");
            const blogTitleInput = document.getElementById("blog-title-input").value.trim();
            const blogTextInput = document.getElementById("blog-text-input").value.trim();

            // Check if all fields are filled
            if (blogImageInput.files.length === 0 || blogTitleInput === "" || blogTextInput === "") {
                // Display an alert if any field is empty
                alert("Please fill out all fields to create a blog.");
                return;  // Exit the function if validation fails
            }

            // Create a new Div for Blog
            const newDiv = document.createElement("div");
            newDiv.className = "container border my-3 p-3 rounded";

            // Creating Blog Image
            let blogImage = null;  // Initialize outside
            if (blogImageInput.files.length > 0) {
                blogImage = document.createElement("img");
                blogImage.className = "w-100 rounded";
                blogImage.style.height = "75vh";
                blogImage.src = URL.createObjectURL(blogImageInput.files[0]);
                blogImage.height = 50;
                blogImage.width = 50;
                newDiv.appendChild(blogImage);
            }

            // Creating a Blog Title
            let blogTitle = null;  // Initialize outside
            if (blogTitleInput !== "") {
                blogTitle = document.createElement("h3");
                blogTitle.className = "text-center my-3 display-4";
                blogTitle.textContent = blogTitleInput;
                newDiv.appendChild(blogTitle);
            }

            // Creating a Blog Text
            let blogText = null;  // Initialize outside
            if (blogTextInput !== "") {
                blogText = document.createElement("p");
                blogText.className = "lead";
                blogText.textContent = blogTextInput;
                newDiv.appendChild(blogText);
            }

            //Giving the Date
            const date = new Date();
            const blogDate = document.createElement("p");
            blogDate.className = "lead text-muted";
            blogDate.style.textAlign = "right";
            blogDate.textContent = "- " + date;
            newDiv.appendChild(blogDate);


            // Creating an Edit Button
            const editButton = document.createElement("input");
            editButton.className = "btn btn-warning mb-3";
            editButton.type = "button";
            editButton.value = "Edit Blog";
            newDiv.appendChild(editButton);

            // Edit Button - Form Creation
            const editForm = document.createElement("form");
            editForm.onsubmit = function (event) {
                event.preventDefault();
                return false;
            };
            editForm.id = "edit-form";
            editForm.action = "#";
            editForm.style.display = "none";
            newDiv.appendChild(editForm);

            // Edit Button - Inside the edit form
            // Edit Blog Image
            const editBlogImage = document.createElement("input");
            editBlogImage.type = "file";
            editBlogImage.accept = "image/jpg image/jpeg image/png";
            editForm.appendChild(editBlogImage);

            // Edit Blog Title
            const editBlogTitle = document.createElement("input");
            editBlogTitle.className = "responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12";
            editBlogTitle.type = "text";
            editBlogTitle.placeholder = "Edit Blog Title";
            editForm.appendChild(editBlogTitle);

            // Edit Blog Text
            const editBlogText = document.createElement("textarea");
            editBlogText.className = "responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12 mt-3";
            editBlogText.rows = "10";
            editBlogText.style.display = "block";
            // editBlogText.type = "text";
            editBlogText.placeholder = "Edit Blog Text";
            editForm.appendChild(editBlogText);

            // Edit Save Button
            const editBlogSave = document.createElement("input");
            editBlogSave.className = "btn btn-success my-3";
            editBlogSave.type = "button";
            editBlogSave.style.display = "block";
            editBlogSave.value = "Save";
            editForm.appendChild(editBlogSave);

            // Adding edit functionality to edit button
            editButton.addEventListener('click', () => {
                if (editForm.style.display === "none") {
                    editForm.style.display = "block";
                } else {
                    editForm.style.display = "none";
                }
            });

            // Save Button Functionality
            editBlogSave.addEventListener('click', () => {
                // Update blog image if an image is provided
                if (editBlogImage.files.length > 0 && blogImage) {
                    blogImage.src = URL.createObjectURL(editBlogImage.files[0]);
                }

                // Update the blog title only if a new value is entered
                if (editBlogTitle.value.trim() !== "") {
                    blogTitle.textContent = editBlogTitle.value;
                }

                // Update the blog text only if a new value is entered
                if (editBlogText.value.trim() !== "") {
                    blogText.textContent = editBlogText.value;
                }

                // Resetting the Form
                editForm.reset();

                // Hide the edit form after saving
                editForm.style.display = "none";
            });

            // Creating a Delete Button
            const deleteButton = document.createElement("input");
            deleteButton.type = "button";
            deleteButton.className = "btn btn-danger";
            deleteButton.style.display = "block";
            deleteButton.value = "Delete Post";
            newDiv.appendChild(deleteButton);

            // Adding delete functionality to the delete button
            deleteButton.addEventListener('click', () => {
                newDiv.remove();
            });

            // Only append if there are elements to display
            const blogContainer = document.getElementById("blogContainer");
            blogContainer.prepend(newDiv);

            // Scroll to the newly created blog
            newDiv.scrollIntoView({ behavior: "smooth" });

            // Resetting the form
            document.getElementById("myForm").reset();

            // Increment for next blog post
            i++;

            //Take to the newly created blog
            scrollIntoView(newDiv);
        });