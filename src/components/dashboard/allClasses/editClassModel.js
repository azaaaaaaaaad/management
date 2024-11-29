// 'use client';

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const Modal = ({ classData, onClose, onSave }) => {
//     const [formData, setFormData] = useState({ ...classData });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSave = () => {
//         onSave(formData);
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-lg">
//                 <h3 className="text-2xl font-bold text-yellow-400 mb-4">Edit Class</h3>
//                 <form className="space-y-4">
//                     <input
//                         name="teacherName"
//                         value={formData.teacherName}
//                         onChange={handleChange}
//                         placeholder="Teacher Name"
//                         className="w-full p-2 rounded-md bg-gray-700 text-white"
//                     />
//                     {/* Add more fields as needed */}
//                 </form>
//                 <div className="flex justify-end gap-2 mt-4">
//                     <button
//                         onClick={onClose}
//                         className="px-4 py-2 bg-red-600 text-white rounded-md"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSave}
//                         className="px-4 py-2 bg-blue-600 text-white rounded-md"
//                     >
//                         Save
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
