const express = require("express");
const app = express();
const PORT = 3000;

// Middleware 
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "Amna" },
  { id: 2, name: "Ali" }
];

// GET 
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

//  POST – Add a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

//  DELETE 
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter(user => user.id !== userId);

  res.status(200).json({
    message: "User deleted successfully"
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
