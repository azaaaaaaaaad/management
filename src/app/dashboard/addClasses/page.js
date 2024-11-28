import AddClassForm from "@/components/addClasses/addClasses";


export default function AddClass() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="py-6 text-center bg-blue-600 text-white">
                <h1 className="text-3xl font-bold">Add New Class</h1>
            </div>
            <AddClassForm />
        </div>
    )
}
