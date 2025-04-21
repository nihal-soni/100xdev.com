import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-gray-300 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">100xDev</h1>
          <p className="text-sm text-gray-400 mt-2">
            Learn. Build. Ship. Repeat.
          </p>
        </div>
        <div className="flex text-center flex-col sm:flex-row gap-4 text-sm">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Courses</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
            <a href="https://github.com" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="https://twitter.com" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-white transition-colors"><FaLinkedin /></a>
            <a href="https://mail.google.com" className="hover:text-white transition-colors"><FaEnvelope /></a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} 100xDev. All rights reserved.
        <p className="mt-1">Developed by <span className="text-white font-medium">nihal.devv</span></p>
      </div>
    </footer>
  );
};

export default Footer;
