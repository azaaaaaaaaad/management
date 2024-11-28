import React from "react";
import { FaComment, FaHeart } from "react-icons/fa";

const LatestNews = () => {
  return (
    <div className="container mx-auto px-5 py-10 bg-white">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Latest News
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1: Image Card */}
        <div className="bg-white border border-gray-300 shadow-lg">
          <img
            src="https://i.ibb.co.com/drZ9TMg/Depositphotos-73936515-original.jpg"
            alt="Image 1"
            className="w-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Card 2: Article Card */}
        <div className="bg-white border border-gray-300  p-2 shadow-lg">
          <h3 className="text-lg font-bold text-teal-600 mb-2">
            ONLINE OR FACE-TO-FACE? LEARNING ENGLISH TODAY
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Nam libero tempore, cum soluta nobis est eligendi optio
          </p>
          <div className="text-sm text-gray-500">
            <p className="mb-2">
              by <span className="font-bold text-teal-600">Steven Master</span>
            </p>
            <div className="flex items-center gap-4 mb-2">
              <p className="flex items-center gap-1">
                <FaComment className="text-gray-400" /> 0
              </p>
              <p className="flex items-center gap-1">
                <FaHeart className="text-gray-400" /> 45
              </p>
            </div>
            <p>
              in <span className="font-bold text-teal-600">Professional English</span>
            </p>
          </div>
        </div>

        {/* Card 3: Image Card */}
        <div className="bg-white border border-gray-300 shadow-lg">
          <img
            src="https://i.ibb.co.com/C8zwfk8/Depositphotos-85241600-original.jpg"
            alt="Image 1"
            className="w-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Card 4: Article Card */}
        <div className="bg-white border border-gray-300 p-5 shadow-lg">
          <h3 className="text-lg font-bold text-teal-600 mb-2">
            EFFECTIVE LECTURING SKILLS IN ENGLISH
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
          </p>
          <div className="text-sm text-gray-500">
            <p className="mb-2">
              by <span className="font-bold text-teal-600">Steven Master</span>
            </p>
            <div className="flex items-center gap-4 mb-2">
              <p className="flex items-center gap-1">
                <FaComment className="text-gray-400" /> 0
              </p>
              <p className="flex items-center gap-1">
                <FaHeart className="text-gray-400" /> 53
              </p>
            </div>
            <p>
              in <span className="font-bold text-teal-600">Advices, News</span>
            </p>
          </div>
        </div>

        {/* Card 5: Image Card */}
        <div className="bg-white border border-gray-300 shadow-lg">
          <img
            src="https://i.ibb.co.com/j6rPdFz/Depositphotos-85241664-original-1.jpg"
            alt="Image 1"
            className="w-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Card 6: Article Card */}
        <div className="bg-white border border-gray-300 p-5 shadow-lg">
          <h3 className="text-lg font-bold text-teal-600 mb-2">
            ONLINE OR FACE-TO-FACE? LEARNING ENGLISH TODAY
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Nam libero tempore, cum soluta nobis est eligendi optio
          </p>
          <div className="text-sm text-gray-500">
            <p className="mb-2">
              by <span className="font-bold text-teal-600">Steven Master</span>
            </p>
            <div className="flex items-center gap-4 mb-2">
              <p className="flex items-center gap-1">
                <FaComment className="text-gray-400" /> 0
              </p>
              <p className="flex items-center gap-1">
                <FaHeart className="text-gray-400" /> 45
              </p>
            </div>
            <p>
              in <span className="font-bold text-teal-600">Professional English</span>
            </p>
          </div>
        </div>

        {/* Card 7: Image Card */}
        <div className="bg-white border border-gray-300 shadow-lg">
          <img
            src="https://i.ibb.co.com/km0Fqyw/Depositphotos-46326837-original.jpg"
            alt="Image 1"
            className="w-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Card 8: Article Card */}
        <div className="bg-white border border-gray-300 p-5 shadow-lg">
          <h3 className="text-lg font-bold text-teal-600 mb-2">
            EFFECTIVE LECTURING SKILLS IN ENGLISH
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
          </p>
          <div className="text-sm text-gray-500">
            <p className="mb-2">
              by <span className="font-bold text-teal-600">Steven Master</span>
            </p>
            <div className="flex items-center gap-4 mb-2">
              <p className="flex items-center gap-1">
                <FaComment className="text-gray-400" /> 0
              </p>
              <p className="flex items-center gap-1">
                <FaHeart className="text-gray-400" /> 53
              </p>
            </div>
            <p>
              in <span className="font-bold text-teal-600">Advices, News</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
