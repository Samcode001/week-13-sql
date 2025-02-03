import { Client } from "pg";
let client: any;

export async function getClient() {
  if (!client) {
    client = new Client({
      connectionString:
        "postgresql://neondb_owner:npg_7uSZWf4TLseC@ep-steep-sea-a8ioh0pv-pooler.eastus2.azure.neon.tech/neondb?sslmode=require", // Use env variable
      connectionTimeoutMillis: 10000, // 10 seconds
      ssl: { rejectUnauthorized: false },
    });

    try {
      await client.connect();
      console.log("✅ Connected to PostgreSQL!");
    } catch (error: any) {
      console.error("❌ Connection error:", error.stack);
      throw error;
    }
  }

  return client; // Keep connection open for queries
}
