import NextAuth from "next-auth"
import bcrypt from 'bcryptjs'

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
        const client = await clientPromise;
        const db = client.db();
        const user = db.collection("users").findOne({ email });
        
        // check user exist; compare hashed pass; throw err if unmatched
        if (!user) throw new Error('No user found!');
        const isMatchedPass = bcrypt.compareSync(password, user.password);
        if (!isMatchedPass) throw new Error('Incorrect password!');
        
        const userInfo = { id: user._id, username: user.username, email, role: user.role }
        return userInfo
      }
    }),
  ],
})