import axios from "axios";
import { useEffect, useState } from "react";

const AllStudentsData = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Open Modal for Edit
  const handleEdit = (student) => {
    setEditStudent(student);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setEditStudent(null);
  };

  // Update student
  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`/api/students/${editStudent.id}`, editStudent);
      setStudents(
        students.map((student) =>
          student.id === editStudent.id ? editStudent : student
        )
      );
      closeModal();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // Handle edit input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditStudent({ ...editStudent, [name]: value });
  };

  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Name</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Gender</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Class</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Section</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Parents</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Address</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">DOB</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Phone</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Email</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="p-4 text-gray-800">{student.name}</td>
              <td className="p-4 text-gray-800">{student.gender}</td>
              <td className="p-4 text-gray-800">{student.language_class}</td>
              <td className="p-4 text-gray-800">{student.section}</td>
              <td className="p-4 text-gray-800">{student.parents?.father}</td>
              <td className="p-4 text-gray-800">{student.address}</td>
              <td className="p-4 text-gray-800">{student.date_of_birth}</td>
              <td className="p-4 text-gray-800">{student.phone}</td>
              <td className="p-4 text-gray-800">{student.email}</td>
              <td className="p-4">
                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(student)}
                  className="mr-4 text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(student.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
            <h2 className="text-lg font-bold mb-4">Edit Student</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 gap-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={editStudent?.name || ""}
                  onChange={handleEditChange}
                  placeholder="Name"
                  className="p-2 border rounded"
                />

                {/* Address */}
                <input
                  type="text"
                  name="address"
                  value={editStudent?.address || ""}
                  onChange={handleEditChange}
                  placeholder="Address"
                  className="p-2 border rounded"
                />

                {/* Phone */}
                <input
                  type="text"
                  name="phone"
                  value={editStudent?.phone || ""}
                  onChange={handleEditChange}
                  placeholder="Phone"
                  className="p-2 border rounded"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={editStudent?.email || ""}
                  onChange={handleEditChange}
                  placeholder="Email"
                  className="p-2 border rounded"
                />

                {/* Class */}
                <input
                  type="text"
                  name="language_class"
                  value={editStudent?.language_class || ""}
                  onChange={handleEditChange}
                  placeholder="Class"
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllStudentsData;
