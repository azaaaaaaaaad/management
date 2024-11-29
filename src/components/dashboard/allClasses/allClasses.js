'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Modal from './editClassModel'; // A custom modal component for editing

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingClass, setEditingClass] = useState(null); // For editing a class
  const [showEditModal, setShowEditModal] = useState(false); // Toggle for edit modal
  const rowsPerPage = 10;

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('/api/classes');
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  // const handleEdit = (classData) => {
  //   setEditingClass(classData); // Set the class to be edited
  //   setShowEditModal(true); // Open the edit modal
  // };

  // const handleSaveEdit = async (updatedClass) => {
  //   try {
  //     const response = await axios.put('/api/classes', updatedClass);

  //     if (response.status === 200) {
  //       Swal.fire('Success', 'Class updated successfully!', 'success');
  //       setClasses((prev) =>
  //         prev.map((cls) => (cls.idNo === updatedClass.idNo ? updatedClass : cls))
  //       );
  //       setShowEditModal(false);
  //     }
  //   } catch (error) {
  //     console.error('Error updating class:', error);
  //     Swal.fire('Error', 'Failed to update class.', 'error');
  //   }
  // };

  // const handleDelete = async (idNo) => {
  //   try {
  //     const result = await Swal.fire({
  //       title: 'Are you sure?',
  //       text: 'This action cannot be undone!',
  //       icon: 'warning',
  //       showCancelButton: true,
  //       confirmButtonText: 'Yes, delete it!',
  //       cancelButtonText: 'Cancel',
  //       reverseButtons: true,
  //     });

  //     if (!result.isConfirmed) return;

  //     // Send DELETE request
  //     const response = await axios.delete(`/api/classes/${encodeURIComponent(idNo)}`); // Ensure idNo is encoded

  //     if (response.status === 200) {
  //       Swal.fire('Deleted!', 'The class has been deleted successfully.', 'success');
  //       setClasses((prev) => prev.filter((cls) => cls.idNo !== idNo));
  //     }
  //   } catch (error) {
  //     console.error('Error deleting class:', error);
  //     Swal.fire('Error!', 'Failed to delete the class.', 'error');
  //   }
  // };


  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedClasses = classes.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">All Class Schedules</h2>

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-700 bg-gray-800">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-700 text-yellow-400">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Teacher Name</th>
              <th className="px-4 py-3 text-left">Gender</th>
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Section</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Email</th>
              {/* <th className="px-4 py-3 text-left">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {paginatedClasses.map((cls, index) => (
              <tr
                key={index}
                className={`border-t border-gray-600 hover:bg-gray-700 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
                  }`}
              >
                <td className="px-4 py-3">{cls.idNo}</td>
                <td className="px-4 py-3">{cls.teacherName}</td>
                <td className="px-4 py-3">{cls.gender}</td>
                <td className="px-4 py-3">{cls.class}</td>
                <td className="px-4 py-3">{cls.subject}</td>
                <td className="px-4 py-3">{cls.section}</td>
                <td className="px-4 py-3">{cls.date}</td>
                <td className="px-4 py-3">{cls.time}</td>
                <td className="px-4 py-3">{cls.phone}</td>
                <td className="px-4 py-3">{cls.email}</td>
                {/* <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(cls)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(cls.idNo)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-700 text-yellow-400 rounded-md hover:bg-gray-600"
        >
          Previous
        </button>
        <span className="text-yellow-400">
          Page {currentPage} of {Math.ceil(classes.length / rowsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(classes.length / rowsPerPage))
            )
          }
          className="px-4 py-2 bg-gray-700 text-yellow-400 rounded-md hover:bg-gray-600"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <Modal
          classData={editingClass}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default AllClasses;
