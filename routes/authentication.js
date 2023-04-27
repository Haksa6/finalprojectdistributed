const router = require("express").Router();
const authenticate = require("../middleware/auth");
const jwt = require("jsonwebtoken");
// Secret key for JWT
const secretKey = "mysecretkey";

// Hard-coded user credentials for demonstration
const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
  },
];

// Route for user authentication
router.post("/auth", (req, res) => {
  // Get username and password from request body
  const { username, password } = req.body;
  console.log(username, password);

  // Find user with matching credentials
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  // If no user found, return error
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Create JWT token with user information and secret key
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    secretKey,
    {
      expiresIn: "2h",
    }
  );

  // Return token to client
  res.json({ token });
});

// Route for accessing protected resources
router.get("/protected", authenticate, (req, res) => {
  res.json(req.user);
});

module.exports = router;
