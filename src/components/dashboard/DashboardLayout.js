// import Image from "next/image";
// import { MdGroups } from "react-icons/md";
// import { MdOutlineDashboard } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { SiGoogleclassroom } from "react-icons/si";
// import { CiSearch } from "react-icons/ci";

// const DashboardLayout = () => {
//   return (
//     <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
//       <div className="flex items-start">
//         <nav id="sidebar" className="lg:min-w-[250px] w-max max-lg:min-w-8">
//           <div
//             id="sidebar-collapse-menu"
//             className=" bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99] lg:min-w-[250px] lg:w-max max-lg:w-0 max-lg:invisible transition-all duration-500"
//           >
//             <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
//               <a href="javascript:void(0)" className="outline-none">
//                 {/* <Image
//                   src="https://readymadeui.com/readymadeui.svg"
//                   height={200}
//                   width={200}
//                   alt="logo"
//                   className="w-[170px]"
//                 /> */}
//               </a>
//             </div>
//             <div className="py-6 px-6">
//               <ul className="space-y-2">
//                 <li>
//                   <a
//                     href="javascript:void(0)"
//                     className="menu-item text-green-700 text-sm flex items-center cursor-pointer bg-[#d9f3ea] hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
//                   >
//                     <MdOutlineDashboard className="text-2xl mr-2" />
//                     <span>Dashboard</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="javascript:void(0)"
//                     className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
//                   >
//                     <MdGroups className="text-2xl mr-2" />
//                     <span>All Teachers</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="javascript:void(0)"
//                     className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
//                   >
//                     <FaUser className="text-xl mr-2" />
//                     <span>Teacher Profile</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="javascript:void(0)"
//                     className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
//                   >
//                     <SiGoogleclassroom className="text-xl mr-2" />

//                     <span>All Classes</span>
//                   </a>
//                 </li>
//               </ul>

//               {/* <div className="mt-8">
//                 <div className="bg-[#00b074] p-4 rounded-md shadow-md max-w-[196px]">
//                   <p className="text-white text-sm leading-relaxed">
//                     Organize your menus using the action button below!
//                   </p>
//                   <button
//                     type="button"
//                     className="py-2 px-4 bg-white hover:bg-gray-100 text-gray-800 text-sm border-none outline-none rounded-md mt-4"
//                   >
//                     Add Menu
//                   </button>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </nav>

//         <button
//           id="toggle-sidebar"
//           className="lg:hidden w-8 h-8 z-[100] fixed top-[36px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#fff"
//             className="w-3 h-3"
//             viewBox="0 0 55.752 55.752"
//           >
//             <path
//               d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
//               data-original="#000000"
//             />
//           </svg>
//         </button>

//         <section className="main-content w-full px-8">
//           <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-8">
//             <div className="flex flex-wrap items-center w-full relative tracking-wide">
//               <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
//                 <div className="flex items-center gap-4 w-full px-6 bg-white shadow-sm min-h-[48px] sm:mr-20 rounded-md outline-none border-none">
//                   <input
//                     type="text"
//                     placeholder="Search something..."
//                     className="w-full text-sm bg-transparent rounded outline-none"
//                   />
//                   <CiSearch className="text-xl" />
//                 </div>

//                 <div className="flex items-center justify-end gap-6 ml-auto">
//                   {/* <div className="flex items-center space-x-6">
//                     <div className="w-9 h-[38px] flex items-center justify-center rounded-xl relative bg-blue-200 cursor-pointer">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[18px] h-[18px] fill-blue-600"
//                         viewBox="0 0 371.263 371.263"
//                       >
//                         <path
//                           d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
//                           data-original="#000000"
//                         />
//                       </svg>
//                       <span className="absolute w-5 h-5 flex items-center justify-center -right-2.5 -top-2.5 text-[10px] rounded-full bg-blue-600 text-white">
//                         21
//                       </span>
//                     </div>

//                     <div className="w-9 h-[38px] flex items-center justify-center rounded-xl relative bg-blue-200 cursor-pointer">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[18px] h-[18px] fill-blue-600"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M17.933.899C16.973.82 15.78.82 14.258.82H9.742c-1.522 0-2.716 0-3.675.078-.977.08-1.784.245-2.514.618a6.382 6.382 0 0 0-2.79 2.79C.391 5.036.226 5.843.146 6.82c-.079.96-.079 2.154-.079 3.676v4.73a5.02 5.02 0 0 0 5.02 5.02h.667a.39.39 0 0 1 .363.535c-.763 1.905 1.432 3.627 3.101 2.435l2.899-2.07.055-.039a4.717 4.717 0 0 1 2.686-.861h.84c1.719 0 2.767 0 3.648-.258a6.382 6.382 0 0 0 4.329-4.329c.257-.881.257-1.929.257-3.648v-1.515c0-1.522 0-2.717-.077-3.676-.081-.976-.246-1.783-.618-2.514a6.382 6.382 0 0 0-2.79-2.79C19.717 1.145 18.91.98 17.933.9zM4.309 3c.456-.233 1.02-.37 1.893-.44.884-.073 2.01-.074 3.578-.074h4.44c1.568 0 2.694 0 3.578.073.873.071 1.437.209 1.894.44a4.717 4.717 0 0 1 2.062 2.063c.233.456.37 1.02.44 1.894.072.883.073 2.009.073 3.577v1.315c0 1.933-.008 2.721-.19 3.343a4.717 4.717 0 0 1-3.2 3.199c-.621.182-1.41.19-3.343.19h-.687a6.382 6.382 0 0 0-3.635 1.166l-2.96 2.115c-.318.226-.734-.1-.589-.462a2.055 2.055 0 0 0-1.909-2.818h-.667a3.354 3.354 0 0 1-3.355-3.354v-4.695c0-1.568 0-2.694.074-3.577.07-.874.208-1.438.44-1.894A4.717 4.717 0 0 1 4.31 3z"
//                           clipRule="evenodd"
//                           data-original="#000000"
//                         />
//                         <path
//                           d="M8.67 10.533a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0zm4.44 0a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0zm4.44 0a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0z"
//                           data-original="#000000"
//                         />
//                       </svg>
//                       <span className="absolute w-5 h-5 flex items-center justify-center -right-2.5 -top-2.5 text-[10px] rounded-full bg-blue-600 text-white">
//                         4
//                       </span>
//                     </div>

//                     <div className="w-9 h-[38px] flex items-center justify-center rounded-xl relative bg-red-200 cursor-pointer">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-[18px] h-[18px] fill-red-600"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           d="M13.12 24h-2.24a1.498 1.498 0 0 1-1.486-1.32l-.239-1.876a9.45 9.45 0 0 1-1.374-.569l-1.494 1.161a1.492 1.492 0 0 1-1.985-.126l-1.575-1.575a1.488 1.488 0 0 1-.122-1.979l1.161-1.495a9.232 9.232 0 0 1-.569-1.374l-1.88-.239A1.501 1.501 0 0 1 0 13.12v-2.24c0-.757.567-1.396 1.32-1.486l1.876-.239a9.45 9.45 0 0 1 .569-1.374l-1.16-1.494a1.49 1.49 0 0 1 .127-1.986l1.575-1.575a1.489 1.489 0 0 1 1.979-.122L7.78 3.766a9.416 9.416 0 0 1 1.375-.569l.239-1.88C9.484.567 10.123 0 10.88 0h2.24c.757 0 1.396.567 1.486 1.32l.239 1.876c.478.155.938.346 1.375.569l1.494-1.161a1.49 1.49 0 0 1 1.985.127l1.575 1.575c.537.521.591 1.374.122 1.979L20.235 7.78c.224.437.415.897.569 1.374l1.88.239A1.5 1.5 0 0 1 24 10.88v2.24c0 .757-.567 1.396-1.32 1.486l-1.876.239a9.45 9.45 0 0 1-.569 1.374l1.161 1.494a1.49 1.49 0 0 1-.127 1.985l-1.575 1.575a1.487 1.487 0 0 1-1.979.122l-1.495-1.161a9.232 9.232 0 0 1-1.374.569l-.239 1.88A1.5 1.5 0 0 1 13.12 24zm-5.39-4.86c.083 0 .168.021.244.063a8.393 8.393 0 0 0 1.774.736.5.5 0 0 1 .358.417l.28 2.2c.03.251.247.444.494.444h2.24a.504.504 0 0 0 .493-.439l.281-2.204a.5.5 0 0 1 .358-.417 8.393 8.393 0 0 0 1.774-.736.499.499 0 0 1 .55.042l1.75 1.36a.492.492 0 0 0 .655-.034l1.585-1.585a.495.495 0 0 0 .039-.66l-1.36-1.75a.5.5 0 0 1-.042-.55 8.393 8.393 0 0 0 .736-1.774.5.5 0 0 1 .417-.358l2.2-.28A.507.507 0 0 0 23 13.12v-2.24a.504.504 0 0 0-.439-.493l-2.204-.281a.5.5 0 0 1-.417-.358 8.393 8.393 0 0 0-.736-1.774.497.497 0 0 1 .042-.55l1.36-1.75a.49.49 0 0 0-.033-.654l-1.585-1.585a.492.492 0 0 0-.66-.039l-1.75 1.36a.5.5 0 0 1-.551.042 8.359 8.359 0 0 0-1.774-.736.5.5 0 0 1-.358-.417l-.28-2.2A.507.507 0 0 0 13.12 1h-2.24a.504.504 0 0 0-.493.439l-.281 2.204a.502.502 0 0 1-.358.418 8.356 8.356 0 0 0-1.774.735.5.5 0 0 1-.551-.041l-1.75-1.36a.49.49 0 0 0-.654.033L3.434 5.014a.495.495 0 0 0-.039.66l1.36 1.75a.5.5 0 0 1 .042.55 8.341 8.341 0 0 0-.736 1.774.5.5 0 0 1-.417.358l-2.2.28A.505.505 0 0 0 1 10.88v2.24c0 .247.193.464.439.493l2.204.281a.5.5 0 0 1 .417.358c.18.626.428 1.223.736 1.774a.497.497 0 0 1-.042.55l-1.36 1.75a.49.49 0 0 0 .033.654l1.585 1.585a.494.494 0 0 0 .66.039l1.75-1.36a.515.515 0 0 1 .308-.104z"
//                           data-original="#000000"
//                         />
//                         <path
//                           d="M12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
//                           data-original="#000000"
//                         />
//                       </svg>
//                       <span className="absolute w-5 h-5 flex items-center justify-center -right-2.5 -top-2.5 text-[10px] rounded-full bg-[#ff5b5b] text-white">
//                         3
//                       </span>
//                     </div>
//                   </div> */}

//                   <div className="w-1 h-10 border-l border-gray-400"></div>
//                   <div className="dropdown-menu relative flex shrink-0 group">
//                     <div className="flex items-center gap-4">
//                       <p className="text-gray-500 text-sm">Hi, John</p>
//                       <Image
//                         src="https://readymadeui.com/team-1.webp"
//                         height={200}
//                         width={200}
//                         alt="profile-pic"
//                         className="w-[38px] h-[38px] rounded-full border-2 border-gray-300 cursor-pointer"
//                       />
//                     </div>

//                     <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-[38px] right-0 w-56">
//                       <div className="w-full space-y-2">
//                         <a
//                           href="javascript:void(0)"
//                           className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-[#d9f3ea] dropdown-item transition duration-300 ease-in-out"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="w-[18px] h-[18px] mr-4 fill-current"
//                             viewBox="0 0 6 6"
//                           >
//                             <path
//                               d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
//                               data-original="#000000"
//                             />
//                           </svg>
//                           Logout
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </header>

//           <div className="my-10 px-2">
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
//               <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] p-6 w-full max-w-sm rounded-lg overflow-hidden">
//                 <div className="inline-block bg-[#edf2f7] rounded-lg py-2 px-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-6"
//                     viewBox="0 0 511.999 511.999"
//                   >
//                     <path
//                       fill="#06d"
//                       d="m38.563 418.862 22.51 39.042c4.677 8.219 11.41 14.682 19.319 19.388l80.744-57.248.147-82.19-80.577-36.303L0 337.565c-.016 9.09 2.313 18.185 6.991 26.404z"
//                       data-original="#0066dd"
//                     />
//                     <path
//                       fill="#00ad3c"
//                       d="m256.293 173.808 4.212-107.064-84.604-32.663c-7.926 4.678-14.682 11.117-19.389 19.319L7.085 311.186C2.379 319.389.016 328.475 0 337.565l161.283.288z"
//                       data-original="#00ad3c"
//                     />
//                     <path
//                       fill="#00831e"
//                       d="m256.293 173.808 77.503-41.694 3.387-97.745c-7.909-4.706-16.996-7.068-26.379-7.085l-108.499-.194c-9.384-.017-18.479 2.606-26.405 6.991z"
//                       data-original="#00831e"
//                     />
//                     <path
//                       fill="#0084ff"
//                       d="m350.716 338.192-189.434-.338-80.89 139.438c7.909 4.706 16.996 7.068 26.379 7.085l297.933.532c9.384.017 18.479-2.606 26.405-6.991l.314-93.66z"
//                       data-original="#0084ff"
//                     />
//                     <path
//                       fill="#ff4131"
//                       d="M431.109 477.919c7.926-4.678 14.682-11.117 19.388-19.319l9.413-16.111 45.005-77.629c4.706-8.202 7.069-17.288 7.085-26.379l-93.221-49.051-67.768 48.764z"
//                       data-original="#ff4131"
//                     />
//                     <path
//                       fill="#ffba00"
//                       d="m430.756 182.917-74.253-129.16c-4.677-8.22-11.41-14.683-19.32-19.389l-80.891 139.439 94.423 164.385 160.99.288c.016-9.09-2.314-18.185-6.991-26.405z"
//                       data-original="#ffba00"
//                     />
//                   </svg>
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="text-xl font-bold text-gray-800">Heading</h3>
//                   <p className="mt-2 text-sm text-gray-800">
//                     Lorem ipsum dolor sit amet, consectetur.
//                   </p>
//                 </div>

//                 <div className="mt-6">
//                   <div className="flex mb-2">
//                     <p className="text-sm text-gray-800 flex-1">25 GB</p>
//                     <p className="text-sm text-gray-800">50 GB</p>
//                   </div>
//                   <div className="bg-gray-300 rounded-full w-full h-2.5">
//                     <div className="w-1/2 h-full rounded-full bg-blue-600 flex items-center"></div>
//                   </div>
//                 </div>
//               </div>
//               <div></div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

'use client'
import { useState } from "react";
import Image from "next/image";
import { MdGroups } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle profile dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative bg-[#f7f6f9] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        <nav
          id="sidebar"
          className={`lg:min-w-[250px] w-max max-lg:min-w-8 transition-all duration-500 ${isSidebarOpen ? 'w-max' : 'max-lg:w-0 max-lg:invisible'}`}
        >
          <div
            id="sidebar-collapse-menu"
            className="bg-white shadow-lg h-screen fixed top-0 left-0 overflow-auto z-[99]"
          >
            <div className="pt-8 pb-2 px-6 sticky top-0 bg-white min-h-[80px] z-[100]">
              <a href="javascript:void(0)" className="outline-none">
                {/* <Image
                  src="https://readymadeui.com/readymadeui.svg"
                  height={200}
                  width={200}
                  alt="logo"
                  className="w-[170px]"
                /> */}
              </a>
            </div>
            <div className="py-6 px-6">
              <ul className="space-y-2">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="menu-item text-green-700 text-sm flex items-center cursor-pointer bg-[#d9f3ea] hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    <MdOutlineDashboard className="text-2xl mr-2" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    <MdGroups className="text-2xl mr-2" />
                    <span>All Teachers</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    <FaUser className="text-xl mr-2" />
                    <span>Teacher Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="menu-item text-gray-800 text-sm flex items-center cursor-pointer hover:bg-[#d9f3ea] rounded-md px-3 py-3 transition-all duration-300"
                  >
                    <SiGoogleclassroom className="text-xl mr-2" />
                    <span>All Classes</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Sidebar toggle button */}
        <button
          id="toggle-sidebar"
          onClick={toggleSidebar}
          className="lg:hidden w-8 h-8 z-[100] fixed top-[36px] left-[10px] cursor-pointer bg-[#007bff] flex items-center justify-center rounded-full outline-none transition-all duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            className="w-3 h-3"
            viewBox="0 0 55.752 55.752"
          >
            <path
              d="M43.006 23.916a5.36 5.36 0 0 0-.912-.727L20.485 1.581a5.4 5.4 0 0 0-7.637 7.638l18.611 18.609-18.705 18.707a5.398 5.398 0 1 0 7.634 7.635l21.706-21.703a5.35 5.35 0 0 0 .912-.727 5.373 5.373 0 0 0 1.574-3.912 5.363 5.363 0 0 0-1.574-3.912z"
              data-original="#000000"
            />
          </svg>
        </button>

        {/* Main Content */}
        <section className="main-content w-full px-8">
          <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-8">
            <div className="flex flex-wrap items-center w-full relative tracking-wide">
              <div className="flex items-center gap-y-6 max-sm:flex-col z-50 w-full pb-2">
                <div className="flex items-center gap-4 w-full px-6 bg-white shadow-sm min-h-[48px] sm:mr-20 rounded-md outline-none border-none">
                  <input
                    type="text"
                    placeholder="Search something..."
                    className="w-full text-sm bg-transparent rounded outline-none"
                  />
                  <CiSearch className="text-xl" />
                </div>

                <div className="flex items-center justify-end gap-6 ml-auto">
                  {/* Profile Icon with Dropdown */}
                  <div className="relative flex items-center gap-4 cursor-pointer hidden sm:flex md:flex" onClick={toggleDropdown}>
                    <p className="text-gray-500 text-sm">Hi, John</p>
                    <Image
                      src="https://readymadeui.com/team-1.webp"
                      height={38}
                      width={38}
                      alt="profile-pic"
                      className="rounded-full border-2 border-gray-300"
                    />
                  </div>

                  {/* Dropdown Content */}
                  {isDropdownOpen && (
                    <div className="dropdown-content shadow-md p-2 bg-white rounded-md absolute top-[38px] right-0 w-56 z-50">
                      <div className="w-full space-y-2">
                        <a
                          href="javascript:void(0)"
                          className="text-sm text-gray-800 cursor-pointer flex items-center p-2 rounded-md hover:bg-[#d9f3ea] transition duration-300 ease-in-out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[18px] h-[18px] mr-4 fill-current"
                            viewBox="0 0 6 6"
                          >
                            <path
                              d="M3.172.53a.265.266 0 0 0-.262.268v2.127a.265.266 0 0 0 .53 0V.798A.265.266 0 0 0 3.172.53zm1.544.532a.265.266 0 0 0-.026 0 .265.266 0 0 0-.147.47c.459.391.749.973.749 1.626 0 1.18-.944 2.131-2.116 2.131A2.12 2.12 0 0 1 1.06 3.16c0-.65.286-1.228.74-1.62a.265.266 0 1 0-.344-.404A2.667 2.667 0 0 0 .53 3.158a2.66 2.66 0 0 0 2.647 2.663 2.657 2.657 0 0 0 2.645-2.663c0-.812-.363-1.542-.936-2.03a.265.266 0 0 0-.17-.066z"
                            />
                          </svg>
                          Logout
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
        </section>
      </div>
    </div>
  );
};

export default DashboardLayout;
