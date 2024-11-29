import Link from "next/link";

async function LoginPage() {

  return (
    <div className="p-8 pt-14">
      <div className="max-w-md mx-auto border rounded-md p-8 shadow-md">
        <form >
          <h2 className="text-3xl mb-4">Login</h2>
          <div className="mb-3">
            <label className="block text-sm text-gray-500">Email</label>
            <input type="email" name="email" placeholder="ali@mail.com" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-500">Password</label>
            <input type="password" name="password" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
          </div>

          <button type="submit" className="w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Login &rarr;
          </button>

        </form>

        <div className="mt-4">
          <p>Not have an account? <Link href={'/register'} className="text-blue-500 underline">Register</Link> </p>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;