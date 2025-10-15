import { Router } from "express";
import { supabase } from "../services/supabaseServices";

const router = Router();

// rota para testar leitura dos produtos
router.get("/menu", async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Erro Supabase:", error.message);
      return res.status(500).json({ error: error.message });
    }
    return res.json(data);
  } catch (err: any) {
    console.error("Erro inesperado:", err.message);
    return res.status(500).json({ error: "Erro interno" });
  }
});

export default router;