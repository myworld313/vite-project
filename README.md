# Full-Stack Study Guide

This project is a beginner-friendly full-stack app with:

- a React frontend built with Vite
- an Express backend
- Axios for frontend-to-backend requests
- PostgreSQL planned for backend-to-database storage

This README explains what each part does, how the pieces connect, and the pattern you will reuse as you keep building.

## What You Need To Install

This project has two package areas:

- the root project for the frontend
- the `backend` folder for the backend

You also need PostgreSQL installed on your computer if you want the database part to work.

### 1. Install frontend packages

From the project root, run:

```bash
npm install
```

This installs the frontend and root project packages such as:

- `react` and `react-dom` for the user interface
- `react-router-dom` for page routing
- `axios` for frontend-to-backend requests
- `vite` for the frontend dev server and build tool
- `tailwindcss` for styling
- `concurrently` so the frontend and backend can run together with one command

### 2. Install backend packages

Go into the backend folder and run:

```bash
cd backend
npm install
```

This installs backend packages such as:

- `express` for the backend server
- `cors` so the frontend can talk to the backend
- `dotenv` to load values from `.env`
- `pg` to connect Node/Express to PostgreSQL
- `nodemon` to restart the backend automatically while developing

### 3. Install PostgreSQL

You also need PostgreSQL itself installed outside of npm.

This is not a JavaScript package. It is the actual database program.

You need PostgreSQL if you want to:

- create a real database
- create tables
- store app data
- run SQL queries from the backend

### 4. Optional but useful tools

These are not required, but they are helpful:

- `pgAdmin` for a visual PostgreSQL interface
- `Postico`, `TablePlus`, or another SQL client if you prefer a GUI
- VS Code extensions for SQL, ESLint, and React

## Package Summary

### Root project packages

These are already listed in the root `package.json`:

- `react`
- `react-dom`
- `react-router-dom`
- `axios`
- `vite`
- `tailwindcss`
- `@tailwindcss/vite`
- `concurrently`
- `typescript`
- `eslint`

### Backend packages

These are already listed in `backend/package.json`:

- `express`
- `cors`
- `dotenv`
- `pg`
- `nodemon`

## What Each Package Does

This section is here so you can study the package names and remember why they exist.

### Root project packages explained

- `react`
  This is the main frontend library for building components and user interfaces.

- `react-dom`
  This lets React render your app into the browser page.

- `react-router-dom`
  This handles page navigation and routing in the frontend.

- `axios`
  This sends HTTP requests from the frontend to the backend.

- `vite`
  This is the frontend development server and build tool.

- `tailwindcss`
  This is the CSS utility framework used for styling.

- `@tailwindcss/vite`
  This connects Tailwind to Vite in a cleaner way.

- `concurrently`
  This lets you run the frontend and backend together with one command.

- `typescript`
  This adds type checking to JavaScript files like `.ts` and `.tsx`.

- `eslint`
  This checks your code for common mistakes and style issues.

- `@eslint/js`
  This provides base JavaScript linting rules for ESLint.

- `@types/node`
  This gives TypeScript type information for Node.js APIs.

- `@types/react`
  This gives TypeScript type information for React.

- `@types/react-dom`
  This gives TypeScript type information for React DOM.

- `@vitejs/plugin-react`
  This adds React support to Vite.

- `eslint-plugin-react-hooks`
  This helps catch mistakes when using React hooks like `useEffect` and `useState`.

- `eslint-plugin-react-refresh`
  This helps ESLint work correctly with Vite's React refresh behavior.

- `globals`
  This gives ESLint a list of known global variables.

- `typescript-eslint`
  This helps ESLint understand and lint TypeScript files.

### Backend packages explained

- `express`
  This is the backend framework used to create the server and API routes.

- `cors`
  This allows the frontend and backend to communicate across different local ports.

- `dotenv`
  This loads environment variables from `.env` into `process.env`.

- `pg`
  This is the PostgreSQL package for Node.js.

- `nodemon`
  This restarts the backend automatically when backend files change.

## Install Order For This Project

If you are setting up this project from scratch, use this order:

1. Install root packages with `npm install`
2. Install backend packages with `cd backend && npm install`
3. Install PostgreSQL on your computer
4. Set up `backend/.env`
5. Run your SQL file in `backend/sql/schema.sql`
6. Start the app with `npm run dev`

## Commands Cheat Sheet

These are the commands you will use the most while learning and building.

### From the project root

```bash
npm run dev
```

Starts both:

- the React frontend
- the Express backend

```bash
npm run dev:client
```

Starts only the frontend.

```bash
npm run dev:server
```

Starts only the backend.

```bash
npm run build
```

Builds the frontend for production.

### Inside the backend folder

```bash
cd backend
npm install
```

Installs backend packages.

## How To Build A New Feature

This is the repeatable workflow you will use over and over.

### Example goal

Suppose you want to show projects from PostgreSQL.

### Step 1: Make sure the table exists

Create the table in PostgreSQL using `backend/sql/schema.sql`.

### Step 2: Add or update a controller

The controller should:

- receive the request
- run logic
- query the database if needed
- send a response

Example idea:

```js
export async function getProjects(req, res) {
  const result = await pool.query("SELECT * FROM projects");
  res.json(result.rows);
}
```

### Step 3: Add a route

In `backend/routes/systemRoutes.js`, connect a URL to the controller.

Example:

```js
router.get("/api/projects", getProjects);
```

### Step 4: Call the route from React

In a frontend component, use Axios:

```ts
api.get("/api/projects")
```

### Step 5: Store the result in state

React needs state to hold the response data.

### Step 6: Render the result

Display the data in JSX.

This same workflow applies to create, update, delete, login, dashboard data, and almost every other feature.

## How To Think When Debugging

When something breaks, ask this question:

Where in the chain is it failing?

The chain is:

1. React component
2. Axios request
3. Express route
4. Controller logic
5. PostgreSQL query
6. Response back to React

### Common beginner debugging questions

- Is the frontend running?
- Is the backend running?
- Is the route path correct?
- Is the controller connected to the route?
- Is the database running?
- Are the `.env` values correct?
- Is Axios calling the right URL?
- Is the backend sending JSON?

## Common Errors And What They Usually Mean

### `Could not reach the backend.`

Usually means one of these:

- the backend is not running
- Axios is using the wrong backend URL
- the route does not exist
- the browser blocked the request because of CORS

### `Cannot find package 'dotenv'`

Usually means backend packages have not been installed yet.

Fix:

```bash
cd backend
npm install
```

### Database connection errors

Usually means one of these:

- PostgreSQL is not running
- `.env` credentials are wrong
- the database has not been created yet

### Route returns 404

Usually means:

- the path in Axios does not match the path in your Express routes

## How The Files Work Together

Here is the relationship between the main files:

- `src/frontend/Home.tsx`
  Calls the backend with Axios and shows the response.

- `src/frontend/api.ts`
  Stores the base Axios setup.

- `backend/server/server.js`
  Starts the backend server.

- `backend/app.js`
  Creates the Express app and applies middleware.

- `backend/routes/systemRoutes.js`
  Connects URLs to controller functions.

- `backend/controllers/systemController.js`
  Contains the logic for each route.

- `backend/config/db.js`
  Handles PostgreSQL connection setup.

- `backend/sql/schema.sql`
  Creates database tables and starter data.

## Study Plan For A Beginner

If you want to really learn this project, study it in this order:

1. Read `src/frontend/Home.tsx`
2. Read `src/frontend/api.ts`
3. Read `backend/routes/systemRoutes.js`
4. Read `backend/controllers/systemController.js`
5. Read `backend/app.js`
6. Read `backend/server/server.js`
7. Read `backend/config/db.js`
8. Read `backend/sql/schema.sql`

That order helps because it follows the actual request flow.

## Vocabulary You Should Know

- `component`
  A reusable piece of UI in React.

- `state`
  Data stored inside a React component that can change over time.

- `useEffect`
  A React hook used for side effects like fetching data after a component loads.

- `route`
  A backend URL path like `/api/message`.

- `controller`
  A backend function that handles a route.

- `middleware`
  Code that runs before the route handler, often used for JSON parsing or CORS.

- `JSON`
  A text format used to send structured data between frontend and backend.

- `API`
  The backend endpoints the frontend talks to.

- `query`
  A SQL command sent to the database.

- `environment variables`
  Configuration values stored outside the code, usually in `.env`.

## Big Picture

The app is split into two sides:

- `src/frontend` is the user interface
- `backend` is the API and database layer

The normal flow is:

1. A React component needs data.
2. The component sends a request with Axios.
3. Express receives the request on a backend route.
4. A controller handles the request.
5. The controller may query PostgreSQL.
6. The backend sends JSON back.
7. React stores the response in state and renders it.

That is the main full-stack pattern you will use again and again.

## Folder Structure

This section shows the project layout in a way that is easier to study.

```text
vite-project/
  backend/
    config/
    controllers/
    routes/
    server/
    sql/
    .env
    .env.example
    app.js
    package.json
  public/
  src/
    assets/
    frontend/
    index.css
    main.tsx
  package.json
  README.md
```

### What each top-level folder is for

- `backend/`
  This is your Express and PostgreSQL side of the app.

- `public/`
  This is for static files that Vite can serve directly.

- `src/`
  This is your frontend source code.

### What each backend folder is for

- `backend/server/`
  Contains the file that starts the backend server.

- `backend/routes/`
  Contains route definitions such as `/api/message` or `/api/projects`.

- `backend/controllers/`
  Contains the logic that runs when a route is hit.

- `backend/config/`
  Contains shared backend setup such as the PostgreSQL connection.

- `backend/sql/`
  Contains SQL files for creating tables and starter data.

### What each frontend folder is for

- `src/frontend/`
  Contains your React page components and frontend logic.

- `src/assets/`
  Contains images and other frontend assets.

### Important single files

- `backend/app.js`
  Builds the Express app and applies middleware and routes.

- `backend/.env`
  Stores backend environment variables like database credentials.

- `backend/.env.example`
  Shows which environment variables are needed without exposing secrets.

- `src/main.tsx`
  Starts the React app in the browser.

- `src/index.css`
  Holds global frontend styles.

- `package.json`
  Controls the root scripts and frontend/root dependencies.

- `backend/package.json`
  Controls backend scripts and backend dependencies.

## Current Project Structure

```text
vite-project/
  backend/
    .env
    .env.example
    app.js
    package.json
    config/
      db.js
    controllers/
      systemController.js
    routes/
      systemRoutes.js
    server/
      server.js
    sql/
      schema.sql
  src/
    frontend/
      api.ts
      Home.tsx
      About.tsx
      Contact.tsx
      Layout.tsx
      NavBar.tsx
      PageNotFound.tsx
      Portfolio.tsx
    assets/
    main.tsx
    index.css
  package.json
  README.md
```

## What Each Frontend File Does

### `src/frontend/api.ts`

This file creates an Axios client.

It exists so your React components do not need to repeat the backend URL every time they make a request.

Right now it points to:

```ts
http://localhost:3000
```

So when you write:

```ts
api.get("/api/message")
```

Axios sends a request to:

```ts
http://localhost:3000/api/message
```

### `src/frontend/Home.tsx`

This page currently demonstrates the frontend-to-backend connection.

It:

1. loads the page
2. runs `useEffect`
3. sends a request with Axios
4. stores the result in React state
5. displays the backend message

This is your first working example of a full-stack request.

### Other frontend files

Files like `About.tsx`, `Contact.tsx`, `Portfolio.tsx`, and `Layout.tsx` are regular React components and page structure files. They are mostly about UI and routing.

## What Each Backend File Does

### `backend/server/server.js`

This is the backend entry point.

Its job is simple:

1. load environment variables
2. import the Express app
3. start the server on a port

This file does not contain route logic. It only starts the app.

### `backend/app.js`

This file creates and configures the Express app.

It is responsible for:

- creating the app with `express()`
- enabling JSON request parsing with `express.json()`
- enabling CORS so the frontend can talk to the backend
- attaching the routes

Think of `app.js` as the main wiring file for Express.

### `backend/routes/systemRoutes.js`

This file defines which URL runs which controller function.

For example:

- `/` goes to a server status controller
- `/api/message` goes to a message controller
- `/api/health` goes to a health controller

This file does not do the main work itself. It only connects URLs to functions.

### `backend/controllers/systemController.js`

This file contains the actual route logic.

Example ideas:

- return a plain message
- return JSON
- query the database
- handle errors

Controllers are where request handling really happens.

### `backend/config/db.js`

This file sets up the PostgreSQL connection using `pg`.

It reads values from the backend `.env` file, such as:

- `PGHOST`
- `PGPORT`
- `PGUSER`
- `PGPASSWORD`
- `PGDATABASE`

This file is important because your backend should talk to PostgreSQL through one shared connection setup instead of creating new connection logic in every route.

### `backend/sql/schema.sql`

This file contains SQL used to create your database structure.

It is where you put things like:

- creating a database
- creating tables
- inserting starter data

This file is not frontend code and not Express code. It is PostgreSQL setup code.

### `backend/.env`

This file stores backend environment variables.

Examples:

- the backend port
- the frontend URL for CORS
- PostgreSQL credentials

This file is usually private and should not be committed with real secrets.

### `backend/.env.example`

This is the safe template version of `.env`.

It shows which environment variables are needed without exposing real secrets.

## How One Request Works

Here is the exact idea behind your current setup.

### Step 1: React loads the Home page

When `Home.tsx` renders, it runs a `useEffect`.

### Step 2: Axios sends a request

The frontend calls:

```ts
api.get("/api/message")
```

### Step 3: The backend receives the request

Express sees the request and checks its routes.

In `systemRoutes.js`, the path `/api/message` is mapped to a controller function.

### Step 4: The controller runs

In `systemController.js`, the matching function sends JSON back:

```js
res.json({ message: "Hello from backend" });
```

### Step 5: React receives the response

Axios gives the response data back to `Home.tsx`.

Then React stores that data in state and renders it on the page.

That is the same pattern you will use for almost every feature.

## What We Have Already Set Up

Right now, this project already proves that:

- the frontend can reach the backend
- Axios is working
- Express routes are working
- JSON responses are working
- React state updates from backend data are working

This is a major milestone because it means the communication layer is in place.

## What Is Not Fully In Use Yet

PostgreSQL is prepared in the project structure, but the Home page is not yet showing real database data.

Right now:

- `/api/message` returns hardcoded test data
- PostgreSQL connection code exists
- SQL schema setup exists
- the next step is to replace the fake message with real table data

## The Pattern You Will Keep Reusing

Whenever you build a new feature, the pattern is usually:

1. Create a backend route.
2. Create or update a controller.
3. Query PostgreSQL if needed.
4. Return JSON.
5. Call the route from React with Axios.
6. Store the response in state.
7. Render the result in the component.

Example features that follow this pattern:

- load projects
- create a contact form submission
- fetch portfolio items
- update a profile
- delete a record

## Example: Replacing Fake Data With Real Data

Right now the backend sends:

```js
{ message: "Hello from backend" }
```

Later, a real route might send:

```js
[
  { id: 1, title: "Portfolio Site", description: "Built with React and Express" },
  { id: 2, title: "Client Dashboard", description: "Uses PostgreSQL data" }
]
```

That would happen when a controller runs a PostgreSQL query such as:

```sql
SELECT id, title, description FROM projects ORDER BY id ASC;
```

The frontend would then render a list instead of one message string.

## Beginner Mental Model

If the app feels confusing, use this simplified mental model:

- `frontend` = what the user sees
- `backend` = the middle layer that handles requests
- `database` = where data is stored

And for file roles:

- `server.js` = start the backend
- `app.js` = configure Express
- `routes/` = decide which function runs
- `controllers/` = do the work
- `config/db.js` = connect to PostgreSQL
- `sql/` = create database tables

## Commands You Will Commonly Use

From the project root:

```bash
npm run dev
```

This starts:

- the Vite frontend
- the backend package in `backend`

If you only want the backend:

```bash
npm run dev:server
```

If you only want the frontend:

```bash
npm run dev:client
```

## What To Study Next

A good beginner study order is:

1. understand `Home.tsx`
2. understand `api.ts`
3. understand `backend/routes/systemRoutes.js`
4. understand `backend/controllers/systemController.js`
5. understand `backend/server/server.js`
6. understand `backend/config/db.js`
7. then learn how to query PostgreSQL from a controller

## Final Summary

This project is now set up with the standard foundation of a full-stack app:

- React on the frontend
- Express on the backend
- Axios connecting frontend to backend
- PostgreSQL prepared for backend data storage

The most important idea to remember is:

Frontend does not talk directly to PostgreSQL.

The real flow is:

React -> Axios -> Express route -> controller -> PostgreSQL -> controller -> JSON response -> React UI

That one sentence describes the core architecture of your app.
