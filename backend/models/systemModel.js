import { pool } from "../config/db.js";

export async function getDbTime() {
  const result = await pool.query("SELECT NOW() AS now");
  return result.rows[0].now;
}
