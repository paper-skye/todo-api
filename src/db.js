const pg = require("pg");
const { isProd } = require("./util");

const pool = new pg.Pool({
	max: 10,
	connectionString: process.env.DATABASE_URL,
	ssl: isProd ? {
		rejectUnauthorized: false
	} : undefined
});

module.exports = {
	pool,
	async query(text, args) { return await pool.query(text, args); }
};
