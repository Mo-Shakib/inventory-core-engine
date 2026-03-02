const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

// 1. Grab the database URL from our environment, or fallback to the local file
const dbUrl = process.env.DATABASE_URL || "file:./prisma/dev.db";

// 2. Initialize the SQLite adapter
const adapter = new PrismaBetterSqlite3({
  url: dbUrl,
});

// 3. Pass the adapter into the Prisma Client
const prisma = new PrismaClient({ adapter });

module.exports = prisma;