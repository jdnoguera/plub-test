import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions = {
  type: 'sqlite',
  database: 'plub-test',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
  synchronize: true,
  // logging: true,
  // subscribers: [],
};

export default config;
