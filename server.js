const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// connect mongodb
mongoose.connect("mongodb://127.0.0.1:27017/taskdb")
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

// schema
const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});

// model
const Task = mongoose.model("Task", taskSchema);

// add task
app.post("/tasks", async (req, res) => {
  try {
    const task = new Task({
      text: req.body.task,
      completed: false
    });

    await task.save();
    res.json({ message: "task added" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// delete task
app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// toggle task
app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.json({ message: "task not found" });
    }

    task.completed = !task.completed;
    await task.save();

    res.json({ message: "task updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// dynamic port (important for deployment)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});