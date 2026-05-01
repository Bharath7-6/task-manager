# Task Manager (Full Stack)

A simple full-stack task manager application built using Node.js, Express, and MongoDB.
This project allows users to create, update, delete, and manage tasks with a clean UI.



##  Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Search tasks
* Filter (All / Completed / Pending)
* Task statistics (total, completed, pending)
* Persistent storage using MongoDB



## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js, Express.js
* Database: MongoDB Atlas
* Deployment: Render



##  Project Structure

task-manager/
│── server.js
│── index.html
│── package.json
│── .env
│── .gitignore


##  Setup Instructions

### 1. Clone the repository

git clone https://github.com/your-username/task-manager.git

### 2. Install dependencies

npm install

### 3. Create .env file

Add your MongoDB connection string:
MONGO_URI=your_mongodb_connection_string

### 4. Run the server

node server.js


##  API Endpoints

GET /tasks → Get all tasks
POST /tasks → Add new task
PUT /tasks/:id → Toggle task completion
DELETE /tasks/:id → Delete task



##  Future Improvements

* User authentication (login/signup)
* Drag and drop tasks
* Dark mode
* Mobile responsive UI



##  What I Learned

* Building REST APIs with Express
* Connecting Node.js with MongoDB Atlas
* Handling real-world debugging issues
* Full-stack application architecture
* Deploying backend services



##  Contact

Feel free to reach out if you have any suggestions or improvements.
