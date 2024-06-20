import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import connectDB from "./config/db.js";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB
connectDB();

app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5174', // Your frontend URL
}));

// Init middleware 
app.use(express.json()); // Body parsing middleware

// Define Routes
app.use("/api/book", bookRoute);
app.use("/api/user", userRoute);

// Define routes for /api
// app.get('/api', (req, res) => {
//   res.send('API is running');
// });

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the e-store API");
});

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.send({ status: 'Message received' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
