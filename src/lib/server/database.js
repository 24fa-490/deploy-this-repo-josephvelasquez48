import postgres from 'postgres';
import * as env from '$env/dynamic/private';

const PGCONNECT = env.PGCONNECT
const sql = postgres(DATABASE_URL);

export default sql;
