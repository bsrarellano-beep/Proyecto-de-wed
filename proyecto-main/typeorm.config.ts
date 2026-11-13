import { config } from 'dotenv';
import { DataSource } from 'typeorm';

const env = process.env.NODE_ENV || 'development';

config({
    override: true,
    path: `.env.${env}`,
    debug: true 
});

export default new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: +(process.env.PORT_DB ?? 5433), // <--- Corregido: PORT_DB en lugar de PORT
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: false, 
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*{.ts,.js}'] // <--- Ruta limpia sin __dirname
});