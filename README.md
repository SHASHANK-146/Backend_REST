
# 🚀 Backend REST API with CRUD Operations

This project demonstrates a **simple backend REST API** that performs **CRUD (Create, Read, Update, Delete)** operations using **Express.js**. Users can manage posts with a `username` and `content` attribute. The API implements the full flow of a RESTful web application, allowing the creation, viewing, editing, and deletion of posts.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for executing backend code.
- **Express.js**: Web framework for building the REST API.
- **UUID**: Library for generating unique IDs for each post.
- **Method-Override**: Middleware to handle HTTP verbs like PATCH and DELETE in forms.
- **EJS**: Template engine for rendering HTML views with dynamic data.

---

## 📋 Setup and Installation

Follow the steps below to set up and run this project locally:

### 1. Clone the repository
```bash
git clone https://github.com/Prasad-hg/Backend_REST.git

2. Install dependencies
Navigate to the project directory and install all required dependencies:
npm install

3. Run the application
Start the server using nodemon or node:
nodemon index.js
or
node index.js
The application will be available at http://localhost:8080.

📝 API Endpoints
1. Create Post (POST)
URL: /posts
Method: POST
Body Parameters:
username (string) - Username of the person posting.
content (string) - The content of the post.

2. Get All Posts (GET)
URL: /posts
Method: GET
Description: Fetches and displays all the posts from the database.

3. Get Single Post (GET)
URL: /posts/:id
Method: GET
Parameters:
id (UUID) - The unique ID of the post.
Description: Fetches details of a single post by its ID.

4. Edit Post (GET & PATCH)
URL: /posts/:id/edit
Method: GET
Description: Displays the form for editing a specific post.
URL: /posts/:id
Method: PATCH
Parameters:
id (UUID) - The unique ID of the post.
content (string) - New content for the post.

5. Delete Post (DELETE)
URL: /posts/:id
Method: DELETE
Parameters:
id (UUID) - The unique ID of the post.
Description: Deletes a post from the database.


🗂️ Directory Structure
/Backend_REST
  ├── /views              # Views folder containing EJS templates
      ├── index.ejs       # Displays all posts
      ├── show.ejs        # Displays a single post
      ├── edit.ejs        # Form for editing a post
      ├── new.ejs         # Form for creating a new post
  ├── /public             # Static assets (CSS, JS)
  ├── index.js            # Main server file
  ├── package.json        # Project metadata and dependencies
  ├── README.md           # Project documentation


⚙️ How It Works
Create Post: Users can create a new post by providing a username and content. The data is saved and stored with a unique ID generated by uuidv4.

View All Posts: The main page renders all posts from the in-memory data (no database used). Users can view a list of all posts.

Edit Post: Users can update a post's content by navigating to the edit form and submitting the updated content.

Delete Post: Users can delete a post by clicking on the delete option. Upon deletion, the post is removed from the data.

🚀 Future Improvements
Integrating a database (e.g., MongoDB, MySQL) to persist posts instead of using in-memory storage.
Implementing user authentication for secure post creation and modification.
Adding input validation and better error handling to enhance the reliability of the application.
Deploying the application on cloud platforms such as Heroku or Vercel for public access.

💬 Feedback and Contributions
Feel free to contribute by opening an issue or creating a pull request! If you have any feedback or suggestions, please reach out or contribute.
