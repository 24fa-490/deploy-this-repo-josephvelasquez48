import postgres as 'postgres'
import * as env from '$env/dynamic/private';

const DATABASE_URL = env.DATABASE_URL;
const sql = postgres(DATABASE_URL);

export default sql;
