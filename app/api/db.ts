import { NextApiRequest, NextApiResponse } from 'next';
import { Pool, QueryResult } from 'pg';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : undefined,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let client;
  
    try {
      client = await pool.connect();
      const result: QueryResult = await client.query('SELECT $1::text as message', ['Hello World']);
      const message: string = result.rows[0].message;
      res.status(200).json({ message });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    } finally {
      // Release the client back to the pool
      if (client) client.release();
    }
  }
