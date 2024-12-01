import NextAuth from "next-auth"
import bcrypt from 'bcryptjs'
import Credentials from 'next-auth/providers/credentials'
import { connectDB } from "@/lib/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      authorize: async (credentials) => {
        const email = credentials.email
        const password = credentials.password

        if (!email || !password) throw new Error('Please provide email & password!');

        // get user from db
        const db = await connectDB()
        const user = await db.collection('users').findOne({ email })

        // check user exist; compare hashed pass; throw err if unmatched
        if (!user) throw new Error('No user found!');
        const isMatchedPass = bcrypt.compareSync(password, user.password);
        if (!isMatchedPass) throw new Error('Incorrect password!');

        const userInfo = { id: user._id, username: user.username, email, role: user.role }
        return userInfo
      }
    }),
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    // set role to token 
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.username = user.username
      }
      return token
    },
    // set role to session (from token)
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub
        session.user.role = token.role
        session.user.username = token.username
      }
      return session
    },
  }
})