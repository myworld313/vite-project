import { pool } from "../config/db.js";

export function getServerStatus(req, res) {
  res.send("Server is running");
}

export function getMessage(req, res) {
  res.json({ message: "Hello from backend" });
}

export async function getHealth(req, res) {
  try {
    const result = await pool.query("SELECT NOW() AS now");

    res.json({
      ok: true,
      database: "connected",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database health check failed:", error);
    res.status(500).json({
      ok: false,
      database: "disconnected",
    });
  }
}
