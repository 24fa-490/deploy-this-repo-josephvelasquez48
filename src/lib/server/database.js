import postgres from 'postgres';
import * as env from '$env/dynamic/private';

const POSTGRES_URL = env.POSTGRES_URL;
const sql = postgres(POSTGRES_URL);

export default sql;
