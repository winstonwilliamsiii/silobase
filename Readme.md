# 📊 DataPlane

**DataPlane** is an open-source, lightweight backend-as-a-service (BaaS) that lets you instantly expose any SQL database (like PostgreSQL, MySQL, SQLite) over a REST API. Just connect your database, and you're ready to go—no backend code required.

Built with [Fastify](https://www.fastify.io/) and [Knex.js](https://knexjs.org/) in TypeScript.

---

## 🚀 Features

- 🔄 Auto-generated CRUD endpoints for any table
- 🧩 Supports PostgreSQL, MySQL, SQLite (via Knex)
- 🔐 API Key security (read-only, write-only, full-access)
- 🔎 Query filters and joins
- ⚡ Fastify + TypeScript for performance and type safety

---

## 🧪 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/dataplane.git
cd dataplane
npm install
```

### 2. Configure
Create a .env file:

```bash
PORT=3000
DB_CLIENT=pg 
DATABASE_URL=<database_url>

API_KEY_READ=your-read-key
API_KEY_WRITE=your-write-key
API_KEY_FULL=your-full-key
```

### 3. Run the server
```bash
npm run build && npm start
```

## REST Endpoints 
| Method |  Url  | Description 
|--------|-------|------------
| POST   | rest/v1/:table| Create record
All requests must include the correct API key in the x-api-key header.


## 🔐 API Key Permissions
|Key Type |	Permissions
|-------- | ----------
|read	  | GET only
|write	  | POST, PATCH, DELETE
|full	  | All operations

## 🧩 Folder Structure
```bash
dbplane/
├── src/
│   ├── plugins/        # DB, Swagger, CORS, API Key Guard
│   ├── routes/         # CRUD routes
│   ├── services/       # CRUD logic
│   ├── utils/          # Query builder, filters
│   ├── config/         # Environment config
│   └── app.ts          # Fastify instance
├── tests/
├── .env
├── server.ts
├── package.json
├── README.md
└── CONTRIBUTING.md
```


## 🤝 Contributing
We welcome PRs and suggestions! See CONTRIBUTING.md to get started.