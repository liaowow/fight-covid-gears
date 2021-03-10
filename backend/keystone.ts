import { User } from './schemas/User';
import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-fightcovidgear';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // define how long the user can stay signed in
  secret: process.env.COOKIE_SECRET,
}

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // add data seeding
  },
  lists: createSchema({
    // schema items here
    User,
  }),
  ui: {
    // change for roles
    isAccessAllowed: () => true,
  },
  // add session values here
});