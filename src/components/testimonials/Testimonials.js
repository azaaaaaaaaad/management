"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonial = () => {
    const testimonials = [
        {
            name: "Emma Brown",
            role: "Student",
            image: "https://i.ibb.co/cbsn3s1/front-view-man-with-nose-ring.jpg",
            text: "Joining this program was the best decision I ever made. The instructors are amazing, and the lessons are practical and engaging.",
        },
        {
            name: "Noah Williams",
            role: "Student",
            image: "https://i.ibb.co/cbsn3s1/front-view-man-with-nose-ring.jpg",
            text: "I gained so much confidence and knowledge through this program. It's been an incredible journey of growth and learning.",
        },
        {
            name: "Sophia Johnson",
            role: "Student",
            image: "https://i.ibb.co/cbsn3s1/front-view-man-with-nose-ring.jpg",
            text: "The community and resources provided here are unmatched. I feel well-prepared to take on any challenge now.",
        },
    ];

    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
                    What Our Students Say
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Hear directly from our students about how this program has transformed their
                    skills and confidence.
                </p>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="testimonial-swiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
                                {/* <Image
                                    src="https://i.ibb.co/cbsn3s1/front-view-man-with-nose-ring.jpg"
                                    height={200}
                                    width={200}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-md mb-6"
                                /> */}
                                <img
                                    src="https://i.ibb.co/cbsn3s1/front-view-man-with-nose-ring.jpg"
                                    alt="Testimonial"
                                    className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-md mb-6"
                                />
                                <p className="text-gray-600 text-lg italic mb-6">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <p className="text-teal-600 font-medium">{testimonial.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;





