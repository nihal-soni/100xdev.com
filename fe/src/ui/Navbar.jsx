
const navlinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Testimonials", path: "/tesimonials" },
    { name: "Faq's", path: "/faq" },
];

const navbar = () => {
    return (
        <nav className="py-4 lg:py-8">
            <div className="flex justify-around  items-center">
                <div className="flex justify-center items-center gap-2">
                    <button className="py-0.5 px-2 border rounded-md bg-white text-black font-bold">100x</button>
                    <h1 className="text-xl font-bold">Developer</h1>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {navlinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="font-['Roboto'] px-3 py-1 cursor-poiter rounded-md text-white hover:bg-zinc-800 hover:text-white transition-colors duration-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>


                <div className="flex justify-center items-center gap-4 ">
                    <button className="py-1 px-3 cursor-pointer bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 rounded-md bg-black font-bold text-amber-100">SignIn</button>
                    <button className="py-1 px-3 cursor-pointer border rounded-md bg-black font-semibold hover:bg-cyan-900 hover:text-black text-amber-100">SignUp</button>
                </div>
            </div>
        </nav>
    )
}

export default navbar;