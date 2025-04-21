import React, { useState } from "react";

const navlinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/ThreeDCard.jsx" },
    { name: "Testimonials", path: "/tesimonials" },
    { name: "Faq's", path: "/faq" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="py-4 lg:py-8 bg-black text-white">
            <div className="container mx-auto flex justify-between items-center px-4">
          
                <div className="flex items-center gap-2">
                    <button
                        className="py-0.5 px-2 border rounded-md bg-white text-black font-bold"
                        aria-label="Logo"
                    >
                        100x
                    </button>
                    <h1 className="text-xl font-bold">Developer</h1>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {navlinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="font-['Roboto'] px-3 py-1 cursor-pointer rounded-md hover:bg-zinc-800 transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                
                <div className="hidden md:flex items-center gap-4">
                    <button className="py-1 px-3 cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 rounded-md font-bold text-amber-100">
                        SignIn
                    </button>
                    <button className="py-1 px-3 cursor-pointer border rounded-md hover:bg-cyan-900 hover:text-black font-semibold text-amber-100">
                        SignUp
                    </button>
                </div>
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-zinc-800"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        ></path>
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-black text-white">
                    <div className="flex flex-col items-center gap-4 py-4">
                        {navlinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="font-['Roboto'] px-3 py-1 cursor-pointer rounded-md hover:bg-zinc-800 transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="py-1 px-3 cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 rounded-md font-bold text-amber-100">
                            SignIn
                        </button>
                        <button className="py-1 px-3 cursor-pointer border rounded-md hover:bg-cyan-900 hover:text-black font-semibold text-amber-100">
                            SignUp
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;