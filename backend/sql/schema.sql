CREATE DATABASE vite_app;

\c vite_app;

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (title, description)
VALUES
  ('Portfolio Site', 'Personal site built with React, Vite, and Express.'),
  ('Backend API', 'Express server prepared for PostgreSQL queries.'),
  ('Frontend Client', 'React frontend that talks to backend routes with Axios.');
