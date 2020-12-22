import passport from "passport";
import GithubStrategy from "passport-github";
import { githubLoginCallback } from "./controllers/userControllers";
import User from "./models/User";

passport.use(User.createStrategy());

passport.use(
  new.GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: `http://localhost:800${routes.githubCallback}`,
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
