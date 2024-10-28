import postgres from 'postgres';
import * as env from '$env/dynamic/private';

const PGCONNECT = env.PGCONNECT;
const sql = postgres(PGCONNECT);

export default sql;
