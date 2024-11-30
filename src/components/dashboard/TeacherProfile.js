import { auth } from "@/app/auth";

async function TeacherProfile() {
  const session = new auth()
  console.log('teacher pro::', session);
  
  return (
    <div className="text-black">
      teacher
    </div>
  );
}

export default TeacherProfile;