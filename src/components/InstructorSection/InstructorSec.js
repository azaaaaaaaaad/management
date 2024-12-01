import React from 'react'

export default function InstructorSec() {
  return (
    <div>
      <div className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* <!-- Card 1 --> */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="relative">
              <img
                src="https://i.postimg.cc/2yc4WPv3/man-1845259-1280.jpg"
                alt="Danny Awesome"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Danny Awesome</h3>
            <p className="text-sm text-yellow-600 font-medium">MANAGER</p>
            <p className="text-gray-600 mt-4 text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              deleniti atque corrupti quos dolores.
            </p>
            <div className="flex justify-center mt-4 space-x-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://i.postimg.cc/DfBQRbDF/man-1283235-1280.jpg"
              alt="Kimberly Richiez"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Kimberly Richiez</h3>
            <p className="text-sm text-blue-600 font-medium">ENGLISH AND RUSSIAN</p>
            <p className="text-gray-600 mt-4 text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              deleniti atque corrupti quos dolores.
            </p>
            <div className="flex justify-center mt-4 space-x-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>
          {/* <!-- Card 3 --> */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://i.postimg.cc/jd26TS0f/positive-aged-math-teacher-standing-with-chalk.jpg"
              alt="Dylan Taylor"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Dylan Taylor</h3>
            <p className="text-sm text-green-600 font-medium">ENGLISH AND SPANISH</p>
            <p className="text-gray-600 mt-4 text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              deleniti atque corrupti quos dolores.
            </p>
            <div className="flex justify-center mt-4 space-x-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>
          {/* <!-- Card 4 --> */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://i.postimg.cc/x1bKkpdT/senior-male-professor-with-arms-crossed-standing-against-chalkboard.jpg"
              alt="Amy Clarke"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">Amy Clarke</h3>
            <p className="text-sm text-teal-600 font-medium">CHINESE AND JAPANESE</p>
            <p className="text-gray-600 mt-4 text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              deleniti atque corrupti quos dolores.
            </p>
            <div className="flex justify-center mt-4 space-x-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <i className="fab fa-skype"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
