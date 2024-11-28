"use client";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-100 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <h3 className="text-2xl font-bold mb-4">Language School</h3>
                    <p className="text-sm text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                        dolorem et amet adipisci exercitationem.
                    </p>
                </div>

                {/* About School */}
                <div>
                    <h4 className="text-xl font-bold mb-4">About School</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Our Staff
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Our Partners
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Programmes */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Programmes</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Long-term Programmes
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Intensive Programmes
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Specialized Programme
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-teal-400">
                                Language Trainings
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold mb-4">Contact Info</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Email: example@language-school.com</li>
                        <li>Phone: 1-800-123-1234</li>
                        <li>Address: Brooklyn, NY 10036, United States</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-8">
                &copy; 2024 Language School. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
