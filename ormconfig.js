module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  entities: ['dist/**/*.entity.js'],
  migrations: ['./dist/database/migrations/*.js'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
