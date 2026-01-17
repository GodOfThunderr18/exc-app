const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const path = require('path');
console.log("NEON_DATABASE_URL:", process.env.NEON_DATABASE_URL ? "LOADED" : "NOT FOUND");

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ 
  adapter 
});

module.exports = { prisma };