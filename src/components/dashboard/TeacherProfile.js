import { auth } from "@/app/auth";

async function TeacherProfile() {
  const session = new auth()
  console.log('teacher pro::', session);
  
  return (
    <div class="max-w-sm mx-auto p-6 bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
    {/* <!-- Teacher Image --> */}
    <div class="flex justify-center">
      <img
        class="w-32 h-32 rounded-full object-cover border-4 border-white"
        src="https://i.postimg.cc/x1bKkpdT/senior-male-professor-with-arms-crossed-standing-against-chalkboard.jpg"
        alt="Teacher Image"
      />
    </div>
  
    {/* <!-- Name and Subject --> */}
    <div class="text-center mt-4">
      <h2 class="text-2xl font-bold text-white">John Doe</h2>
      <p class="text-md text-gray-200">Mathematics Teacher</p>
    </div>
  
    {/* <!-- Graduation Description --> */}
    <div class="mt-4">
      <p class="text-gray-100 text-center">
        Graduated with a B.Sc. in Mathematics from XYZ University. Passionate about teaching and helping students excel.
      </p>
    </div>
  
    {/* <!-- Contact Information --> */}
    <div class="mt-6 flex flex-col items-center gap-4 text-gray-100">
      <div class="flex items-center gap-3">
        <i class="fas fa-envelope text-lg text-white"></i>
        <span>johndoe@email.com</span>
      </div>
      <div class="flex items-center gap-3">
        <i class="fas fa-phone-alt text-lg text-white"></i>
        <span>+880 1234-567890</span>
      </div>
    </div>
  </div>
  
  );
}

export default TeacherProfile;