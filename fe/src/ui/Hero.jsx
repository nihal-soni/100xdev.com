import harkiratImage from '../assets/harkirat.png';
import FloatingCourses from '../components/FloatingCourses';
import FloatingTech from '../components/FloatingCourses';


const Hero = () => {

    return (
        <section className="py-24 overflow-x-clip">
               <FloatingCourses/>
            <div className="relative max-w-7xl mx-auto px-4">

                <div className="text-center space-y-2">
                    <h1 className="font-['Roboto'] text-5xl md:text-6xl font-bold text-white">
                        Become a
                    </h1>
                    <h1 className="font-['Roboto'] text-5xl md:text-6xl font-bold text-white">
                        100x Developer
                    </h1>
                </div>

                <p className="text-center mt-6 text-lg md:text-xl font-medium text-gray-300 max-w-2xl mx-auto">
                    We’re the fastest growing dev learning platform helping developers build, grow, and ship amazing products together.
                </p>

                <div className="flex justify-center mt-8">
                    <a
                        href="/courses"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 text-white text-base font-semibold rounded-full transition hover:scale-105 hover:shadow-lg"
                    >
                        View Courses
                        <span className="text-xl leading-none">→</span>
                    </a>
                </div>


                <div className="flex justify-center mt-12">
                    <img
                        src={harkiratImage}
                        alt="Instructor Harkirat"
                        className="max-w-l shadow-lg"
                    />
                </div>
            
            </div>
        </section>
    );
};

export default Hero;
