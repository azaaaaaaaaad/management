// 'use client';

// import { useState } from 'react';

// const Modal = ({ classData, onClose, onSave }) => {
//   const [formData, setFormData] = useState({ ...classData });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-gray-800 p-6 rounded-md shadow-md w-full max-w-lg">
//         <h3 className="text-2xl font-bold text-yellow-400 mb-4">Edit Class</h3>
//         <form className="space-y-4">
//           {Object.keys(classData).map((key) => (
//             <div key={key}>
//               <label className="text-gray-300">{key}</label>
//               <input
//                 name={key}
//                 value={formData[key]}
//                 onChange={handleChange}
//                 placeholder={`Enter ${key}`}
//                 className="w-full p-2 rounded-md bg-gray-700 text-white"
//               />
//             </div>
//           ))}
//         </form>
//         <div className="flex justify-end gap-2 mt-4">
//           <button onClick={onClose} className="btn btn-red">
//             Cancel
//           </button>
//           <button onClick={handleSave} className="btn btn-blue">
//             Save
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
