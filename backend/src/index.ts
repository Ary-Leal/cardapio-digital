import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import publicRoutes from "./routes/public";

// Declare 'app' antes de usá-la
const app = express();

// Agora você pode usar 'app'
app.use(cors());
app.use(express.json());
app.use("/api", publicRoutes); // Esta linha também deve vir depois da declaração de 'app'

const PORT = process.env.PORT || 5000;

// Rota de teste
app.get("/", (req, res) => {
  res.json({ message: "API Cardápio Digital funcionando 🚀" });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});