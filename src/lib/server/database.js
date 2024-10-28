import postgres from 'postgres';

const DATABASE_URL = env.DATABASE_URL;
const sql = postgres(DATABASE_URL);

export default sql;
