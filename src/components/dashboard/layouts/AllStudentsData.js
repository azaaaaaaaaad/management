import axios from "axios";
import { useEffect, useState } from "react";

const AllStudentsData = () => {
    const [students, setStudents] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchStudents = async()=>{
            try {
                const response = await axios.get("/api/students")
                setStudents(response.data)
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }

        fetchStudents()
    },[])
  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Name
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Gender
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Class
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Section
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Parents
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Address
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              DOB
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Phone
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Email
            </th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap">
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <tr key={index} className="hover:bg-[#d9f3ea]">
                                <td className="p-4 text-[15px] text-gray-800">{student?.name}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.gender}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.language_class}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.section}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.parents.father}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.address}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.date_of_birth}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.phone}</td>
                                <td className="p-4 text-[15px] text-gray-800">{student?.email}</td>
                                <td className="p-4">
                                    <button className="mr-4" title="Edit">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 fill-blue-500 hover:fill-blue-700"
                                            viewBox="0 0 348.882 348.882"
                                        >
                                            <path
                                                d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                                            />
                                        </svg>
                                    </button>
                                    <button className="mr-4" title="Delete">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 fill-red-500 hover:fill-red-700"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                            />
                                            <path
                                                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center p-4">No students found</td>
                        </tr>
                    )}
                </tbody>
      </table>
    </div>
  );
};

export default AllStudentsData;
