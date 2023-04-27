const express = require("express");
const app = express();
const port = 5000;
const authRoutes = require("./routes/authentication");
const userprofileRoutes = require("./routes/userprofile");
const musicmanagementRoutes = require("./routes/musicmanagement");

app.use(express.json());

app.use("/api/user", authRoutes);
app.use("/api/userprofile", userprofileRoutes);
app.use("/api/musicmanagement", musicmanagementRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
