import './style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function InSchoolLan() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center px-4 containerC"
    >
      <div className="text-center">
        {/* Title */}
        <h1 className="text-white text-3xl font-light mb-10">Language School In Number</h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Cards */}
          {[
            { icon: 'fa-user', count: 258, label: 'Students' },
            { icon: 'fa-folder', count: 35, label: 'Learning Programmes' },
            { icon: 'fa-briefcase', count: 12, label: 'Language Trainings' },
            { icon: 'fa-building', count: 9, label: 'Branches' },
            { icon: 'fa-graduation-cap', count: 16, label: 'Teachers' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-50 text-white p-5 rounded-md text-center shadow-md hover:bg-opacity-70 transition-all"
            >
              <div className="text-4xl mb-2">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h2 className="text-5xl font-bold">{item.count}</h2>
              <p className="uppercase mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
