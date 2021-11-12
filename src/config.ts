export const { HOST, PORT, DATABASE_URL, CLIENT_URL } = {
  HOST: process.env.HOST!,

  PORT: parseInt(process.env.PORT!, 10),

  DATABASE_URL: process.env.DATABASE_URL!,

  CLIENT_URL: process.env.CLIENT_URL!
}
