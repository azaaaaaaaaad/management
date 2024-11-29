"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className="h-[80vh] w-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: "url('https://i.postimg.cc/7YPfz9rr/teach-child.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="text-center text-white relative z-10 bg-gray-900/60 py-8 px-12 rounded-md">
                            <h1 className="text-4xl sm:text-5xl font-bold">
                                Putting Children First
                            </h1>
                            <p className="mt-4 text-lg">
                                Preparing Children for Success in Life
                            </p>
                            <div className="mt-6 flex justify-center space-x-4">
                                <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
                                    Sign Up Now
                                </button>
                                <button className="px-6 py-3 bg-white text-red-500 rounded-lg shadow hover:bg-gray-100">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="h-full bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: "url('https://i.postimg.cc/66f8TSSh/learning.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="text-center text-white relative z-10 bg-gray-900/60 py-8 px-12 rounded-md">
                            <h1 className="text-4xl sm:text-5xl font-bold">
                                Learning Made Fun
                            </h1>
                            <p className="mt-4 text-lg">Interactive Classes for Young Minds</p>
                            <div className="mt-6 flex justify-center space-x-4">
                                <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
                                    Start Now
                                </button>
                                <button className="px-6 py-3 bg-white text-red-500 rounded-lg shadow hover:bg-gray-100">
                                    Explore More
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;


