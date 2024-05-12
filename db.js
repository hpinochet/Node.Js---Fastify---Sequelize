/* eslint-disable require-jsdoc */
import Sequelize from 'sequelize';

/*
Clase de conexión a la base de datos
*/
class DBInstance {
	constructor() {
		const dbCfg = {
			user: 'postgres',
			host: 'localhost',
			database: 'trabajo',
			password: 'pass',
			port: 5432,
		};
		this.sequelize = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, {
			host: dbCfg.host,
			dialect: 'postgres',
			logging: (msg) => console.log(msg),
		});
	}
}

export default new DBInstance().sequelize;