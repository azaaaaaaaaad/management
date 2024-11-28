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
            name: "KIRA SIMS",
            role: "Student",
            image: "/images/kira-sims.jpg",
            text: "Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac.",
        },
        {
            name: "PHIL NEAL",
            role: "Designer",
            image: "/images/phil-neal.jpg",
            text: "Nulla nibh libero, tincidunt vero eos et accusamus et justo odio dignissimos ducimus.",
        },
        {
            name: "ALISON SMITH",
            role: "Developer",
            image: "/images/alison-smith.jpg",
            text: "Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Vivamus fermentum ex quis imperdiet sodales.",
        },
    ];

    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
                    What Our Students Say
                </h2>
                <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                    Our students share their experiences and feedback. Read their inspiring words
                    about how our programs have impacted their lives.
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
                                {/* <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-md mb-6"
                                /> */}
                                <Image src={testimonial.image}
                                    height={200}
                                    width={200}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full border-4 border-teal-500 shadow-md mb-6"></Image>
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




