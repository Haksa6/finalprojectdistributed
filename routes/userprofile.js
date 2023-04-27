const router = require("express").Router();

// a simple in-memory data store for user profiles
const userProfiles = {};

// Create a route for getting a user profile by ID
router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const userProfile = userProfiles[id];
  if (userProfile) {
    res.json(userProfile);
  } else {
    res.status(404).send(`User profile with ID ${id} not found`);
  }
});

// Create a route for creating a user profile
router.post("/users/:id", (req, res) => {
  const id = req.params.id;
  const userProfile = req.body;
  userProfiles[id] = userProfile;
  res.status(201).send(`User profile with ID ${id} created or updated`);
});

module.exports = router;
