import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST || 'easexpense-test.mysql.database.azure.com',
  port: parseInt(process.env.DB_PORT || '3306'),
  username: process.env.DB_USER || 'easexpense',
  password: process.env.DB_PASSWORD || 'Qwert12345@',
  database: process.env.DB_NAME || 'test_lakha',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export default sequelize; 