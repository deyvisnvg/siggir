import { config } from "dotenv";

config();

export default {
    PORT: process.env.PORT || 3000,
    DB_NAME: process.env.DB_NAME || 'db-sigir',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'root',
    DB_HOST: process.env.DB_HOST || 'localhost',
}