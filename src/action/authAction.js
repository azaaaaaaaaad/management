"use server"

import clientPromise from "@/lib/mongodb"
import { redirect } from "next/navigation"
import bcrypt from 'bcryptjs'
import { signIn, signOut } from "@/app/auth"

export const register = async (formData) => {
  // get form fields
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')
  const role = formData.get('role')

  if (!username || !email || !password || !role) {
    throw new Error('Please, fill all the fields!')
  }

  const client = await clientPromise;
  const db = client.db();
  const usersColl = db.collection("users");

  // check existing user; throw error if found; else >-
  const existingUser = await usersColl.findOne({ email })
  if (existingUser) throw new Error('already registered!');

  // hash password
  const salt = bcrypt.genSaltSync(10);
  const hashedPass = bcrypt.hashSync(password, salt);

  await usersColl.insertOne({ username, email, password: hashedPass, role })
  redirect('/login')
}

export const login = async (formData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/'
    })
  } catch (err) {
    return err.message
  }

  redirect('/')
}

export const logout = async () => {
  await signOut()
}
