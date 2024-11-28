'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get("/api/classes");
        setClasses(response.data); // Ensure response data matches your MongoDB schema
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedClasses = classes.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
        All Class Schedules
      </h2>
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
            </tr>
          </thead>
          <tbody>
            {paginatedClasses.map((cls, index) => (
              <tr
                key={index}
                className={`border-t border-gray-600 hover:bg-gray-700 ${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
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
    </div>
  );
};

export default AllClasses;
