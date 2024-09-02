require("dotenv").config({ path: ".env.local" });
const knex = require("knex")({
  client: "pg",
  connection: process.env.POSTGRES_PRISMA_URL,
});

async function dropTable() {
  try {
    await knex.schema.dropTableIfExists("posts");
    console.log('Table "posts" dropped successfully');
  } catch (error) {
    console.error("Error dropping table:", error);
  } finally {
    await knex.destroy();
  }
}

dropTable();
