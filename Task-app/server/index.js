// const express =  require('express')
// const mongoose = require('mongoose')

// const app  = express()

// mongoose.connect('mongodb+srv://nisha_p:nishacrest123@cluster0.mqgcnuj.mongodb.net/').then(console.log("connection successful"))

// // const UserSchema = new mongoose.Schema({
// //     name: String,
// //     age: Number
// // })

// // const UserModel = mongoose.model("users", UserSchema)
// app.get('/getUsers', (req, res) => {
//     res.send("connection successful") })


// app.listen(3001, () => {
//     console.log('server is running')
// })

const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://nisha_p:nishacrest123@cluster0.mqgcnuj.mongodb.net/task-manager')
  .then(() => {
    console.log("Connection to MongoDB successful");

    // Define a Mongoose schema for your collection
    const taskSchema = new mongoose.Schema({
      name: String,
      age: Number
    });

    // Define a Mongoose model based on the schema
    const TaskModel = mongoose.model("tasks", taskSchema);

    // Fetch documents from MongoDB and log them to the console
    app.get('/getTasks', async (req, res) => {
      try {
        const tasks = await TaskModel.find();
        console.log(tasks);
        res.send(tasks); // Optionally, send the fetched documents as a response
      } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).send("Error fetching tasks");
      }
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
