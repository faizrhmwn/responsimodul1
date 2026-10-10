import express from "express";
import dotenv from "dotenv";
import loanRoutes from "./routes/loanRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/loans", loanRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/books", bookRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server jalan di port ${port}`);
});