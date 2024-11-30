'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [editClass, setEditClass] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleDelete = async (idNo) => {
    const confirmed = window.confirm('Are you sure you want to delete this class?');
    if (!confirmed) return;

    try {
      await axios.delete(`/api/classes/${encodeURIComponent(idNo)}`);
      setClasses(classes.filter((cls) => cls.idNo !== idNo));
    } catch (error) {
      console.error('Error deleting class:', error.response?.data || error.message);
    }
  };

  const handleEdit = (classData) => {
    setEditClass(classData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditClass(null);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const { idNo, time, ...rest } = editClass;

      // Extract startTime and endTime from time if provided
      let startTime, endTime;
      if (time) {
        [startTime, endTime] = time.split(' - ');
      }

      const updatedClass = {
        ...rest,
        ...(startTime && { startTime }),
        ...(endTime && { endTime }),
      };

      await axios.put(`/api/classes/${encodeURIComponent(idNo)}`, updatedClass);

      setClasses(
        classes.map((cls) =>
          cls.idNo === idNo ? { ...cls, ...updatedClass } : cls
        )
      );
      closeModal();
    } catch (error) {
      console.error('Error updating class:', error.response?.data || error.message);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditClass({ ...editClass, [name]: value });
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedClasses = classes.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="font-sans overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">ID</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Teacher</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Gender</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Class</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Subject</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Section</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Date</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Time</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Phone</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Email</th>
            <th className="p-4 text-left text-xs font-semibold text-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedClasses.map((cls, index) => (
            <tr key={index} className="hover:bg-gray-200">
              <td className="p-4 text-gray-800">{cls.idNo}</td>
              <td className="p-4 text-gray-800">{cls.teacherName}</td>
              <td className="p-4 text-gray-800">{cls.gender}</td>
              <td className="p-4 text-gray-800">{cls.class}</td>
              <td className="p-4 text-gray-800">{cls.subject}</td>
              <td className="p-4 text-gray-800">{cls.section}</td>
              <td className="p-4 text-gray-800">{cls.date}</td>
              <td className="p-4 text-gray-800">{cls.time}</td>
              <td className="p-4 text-gray-800">{cls.phone}</td>
              <td className="p-4 text-gray-800">{cls.email}</td>
              <td className="p-4">
                <button
                  onClick={() => handleEdit(cls)}
                  className="mr-4 text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cls.idNo)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(classes.length / rowsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(classes.length / rowsPerPage))
            )
          }
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
            <h2 className="text-lg font-bold mb-4">Edit Class</h2>
            <form onSubmit={handleUpdate}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="teacherName"
                  value={editClass?.teacherName || ''}
                  onChange={handleEditChange}
                  placeholder="Teacher Name"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="subject"
                  value={editClass?.subject || ''}
                  onChange={handleEditChange}
                  placeholder="Subject"
                  className="p-2 border rounded"
                />
                <input
                  type="text"
                  name="time"
                  value={editClass?.time || ''}
                  onChange={handleEditChange}
                  placeholder="Time (HH:mm - HH:mm)"
                  className="p-2 border rounded"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllClasses;
