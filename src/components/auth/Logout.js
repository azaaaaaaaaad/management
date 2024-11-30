import { logout } from "@/action/authAction";

function Logout() {
  return (
    <form action={logout}>
      <button type="submit" className="bg-red-800 text-white px-2 py-1 rounded-md hover:opacity-85">Logout</button>
    </form>
  );
}

export default Logout;