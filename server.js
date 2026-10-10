
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");

const eventRoutes = require("./routes/eventRoutes");
const registrationRoutes = require("./routes/registrationRoutes");
const teamRoutes = require("./routes/teamRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CampusConnect API is running!");
});

app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/teams", teamRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });