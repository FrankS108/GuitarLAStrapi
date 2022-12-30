module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cemsu61gp3jlcsi6gep0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_qfr2'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'av3Y7onlK1L0OXNPhDFF8nqxTmnmRHk5'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
