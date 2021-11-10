import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

import { app } from '../../../libs/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default NextAuth({
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'name' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize({ username, password }, req) {
        const firebaseAuth = (
          await signInWithEmailAndPassword(getAuth(app), username, password)
        ).user;

        let user = {
          name: firebaseAuth.uid,
          email: firebaseAuth.email,
          image: firebaseAuth.photoURL,
          id: firebaseAuth.uid,
        };

        if (user) return user;
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 2592000, // 30 days
  },
  secret: process.env.SECRET || 'test_secret',
});
