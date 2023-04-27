const router = require("express").Router();

// Mock data
const musicContent = [
  { id: 1, title: "Song 1", artist: "Artist 1", genre: "Pop" },
  { id: 2, title: "Song 2", artist: "Artist 2", genre: "Rock" },
  { id: 3, title: "Song 3", artist: "Artist 3", genre: "Hip Hop" },
];

// GET all music content
router.get("/content", (req, res) => {
  res.json(musicContent);
});

// GET music content by ID
router.get("/content/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const content = musicContent.find((c) => c.id === id);
  if (content) {
    res.json(content);
  } else {
    res.status(404).send("Content not found");
  }
});

// POST new music content
router.post("/content", (req, res) => {
  const content = req.body;
  musicContent.push(content);
  res.status(201).send("Content added successfully");
});

// PUT update existing music content by ID
router.put("/content/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const contentIndex = musicContent.findIndex((c) => c.id === id);
  if (contentIndex !== -1) {
    const content = req.body;
    musicContent[contentIndex] = { ...musicContent[contentIndex], ...content };
    res.send("Content updated successfully");
  } else {
    res.status(404).send("Content not found");
  }
});

// DELETE music content by ID
router.delete("/content/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const contentIndex = musicContent.findIndex((c) => c.id === id);
  if (contentIndex !== -1) {
    musicContent.splice(contentIndex, 1);
    res.send("Content deleted successfully");
  } else {
    res.status(404).send("Content not found");
  }
});

module.exports = router;
