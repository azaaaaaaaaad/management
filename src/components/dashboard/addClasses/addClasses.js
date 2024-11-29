"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddClassForm() {
    const [formData, setFormData] = useState({
        teacherName: "",
        idNo: "",
        gender: "",
        class: "",
        subject: "",
        section: "",
        startTime: "",
        endTime: "",
        date: "",
        phone: "",
        email: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const timeRange = `${formData.startTime} - ${formData.endTime}`;
            const response = await axios.post("/api/classes", { ...formData, time: timeRange });
            if (response.status === 201) {
                Swal.fire("Success", "Class added successfully!", "success");
                setFormData({
                    teacherName: "",
                    idNo: "",
                    gender: "",
                    class: "",
                    subject: "",
                    section: "",
                    startTime: "",
                    endTime: "",
                    date: "",
                    phone: "",
                    email: "",
                });
            }
        } catch (error) {
            console.error("Error adding class:", error.response ? error.response.data : error.message);
            Swal.fire("Error", `Failed to add class: ${error.response?.data || error.message}`, "error");
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add New Class</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                {[
                    { label: "Teacher Name", name: "teacherName", type: "text" },
                    { label: "ID No", name: "idNo", type: "number" },
                    { label: "Gender", name: "gender", type: "select", options: ["Male", "Female"] },
                    { label: "Class", name: "class", type: "number" },
                    { label: "Subject", name: "subject", type: "text" },
                    { label: "Section", name: "section", type: "text" },
                    { label: "Date", name: "date", type: "date" },
                    { label: "Phone", name: "phone", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                ].map(({ label, name, type, options }) =>
                    type === "select" ? (
                        <div key={name} className="flex flex-col">
                            <label className="text-gray-600 font-medium mb-1">{label}</label>
                            <select
                                name={name}
                                value={formData[name]}
                                onChange={handleInputChange}
                                className="mt-1 p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-blue-500 focus:ring focus:ring-blue-300 shadow-sm"
                            >
                                <option value="">Select {label}</option>
                                {options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div key={name} className="flex flex-col">
                            <label className="text-gray-600 font-medium mb-1">{label}</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleInputChange}
                                className="mt-1 p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-blue-500 focus:ring focus:ring-blue-300 shadow-sm"
                            />
                        </div>
                    )
                )}
                {/* Time Range */}
                <div className="col-span-2 flex flex-col">
                    <label className="text-gray-600 font-medium mb-1">Time</label>
                    <div className="flex space-x-2">
                        <input
                            type="time"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleInputChange}
                            className="p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-blue-500 focus:ring focus:ring-blue-300 shadow-sm"
                        />
                        <span className="self-center text-gray-600">to</span>
                        <input
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleInputChange}
                            className="p-3 border rounded-md bg-gray-50 text-gray-800 focus:outline-blue-500 focus:ring focus:ring-blue-300 shadow-sm"
                        />
                    </div>
                </div>
                <div className="col-span-2 flex justify-end space-x-4">
                    <button
                        type="reset"
                        onClick={() =>
                            setFormData({
                                teacherName: "",
                                idNo: "",
                                gender: "",
                                class: "",
                                subject: "",
                                section: "",
                                startTime: "",
                                endTime: "",
                                date: "",
                                phone: "",
                                email: "",
                            })
                        }
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md transition-all"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md transition-all"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
