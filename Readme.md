# 📊 Silobase
![image](https://github.com/user-attachments/assets/b28a0cd5-21db-454d-a03e-c9bbf01d3748)

**Silobase** is an open-source, lightweight backend-as-a-service (BaaS) that lets you instantly expose any SQL database (like PostgreSQL, MySQL, SQLite) over a REST API. Just connect your database, and you're ready to go—no backend code required.

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
git clone https://github.com/yourusername/Silobase.git
cd Silobase
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
| GET    | rest/v1/:table | Get Record 
| UPDATE | rest/v1/:table/{id} | Update a Record
| DELETE | rest/v1/:table/{id} | Delete a Record 

All requests must include the correct API key in the x-api-key header.

## 🔐 API Key Permissions
|Key Type |	Permissions
|-------- | ----------
|read	  | GET only
|write	  | POST, PATCH, DELETE
|full	  | All operations

## Sample CURL Scripts 
POST  rest/v1/:table| Create record
curl --location '<BASE_URL>/rest/v1/users' \
--header 'x-api-key: <API_WRITE_KEY>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "",
    "email": "", 
    "role":""
}'


GET  - rest/v1/:table -  Get Record 
curl --location --request GET '<BASE_URL>/rest/v1/users?join=students%3Aon%3Dusers.id%3Dstudents.user_id&join=enrollments%3Aon%3Dstudents.id%3Denrollments.student_id&role=eq.admin' \
--header 'x-api-key: <API_READ_KEY>' \
--header 'Content-Type: application/json' \
--data-raw ''


UPDATE - rest/v1/:table/{id} - Update a Record
curl --location --request PUT '<BASE_URL>/rest/v1/enrollments/1' \
--header 'x-api-key: <API_READ_KEY> \
--header 'Content-Type: application/json' \
--data '{
    "grade":""
}'

DELETE - rest/v1/:table/{id} - Delete a Record 
curl --location --request DELETE <BASE_URL>/rest/v1/users/6' \
--header 'x-api-key: ae2b6452-1922-4b76-90c1-25be77b278e6' \
--data ''




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
