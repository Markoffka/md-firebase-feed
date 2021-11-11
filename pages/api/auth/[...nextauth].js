/* eslint-disable import/no-anonymous-default-export */
import { app } from '../../../libs/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
let userAccount = null;

const configuration = {
  pages: {
    signIn: '/auth/signin',
  },
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === 'production',
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Login',
      async authorize(credentials) {
        const user = (
          await signInWithEmailAndPassword(
            getAuth(app),
            credentials.email,
            credentials.password
          )
        ).user;

        if (user !== null) {
          userAccount = user;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return !!user;
    },
    async session(session, token) {
      if (userAccount !== null) {
        session.user = userAccount;
      } else if (
        typeof token.user !== typeof undefined &&
        (typeof session.user === typeof undefined ||
          typeof session.user !== typeof undefined)
      ) {
        session.user = token.user;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
  },
};
export default (req, res) => NextAuth(req, res, configuration);
