import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Used for navigation
import { Fade } from "react-awesome-reveal"; // Used for text animation
import {
  FaBook,
  FaUsers,
  FaPen,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // React icons

interface HomepageProps {
  src: string;
  alt: string;
} // A way in ts to define  a structure for objects thta are expected to have specific properties.

const Homepage: React.FC<HomepageProps> = ({ src, alt }) => {
  // React functional component
  const [isMenuOpen, setIsMenuOpen] = useState(false); // This is for responsive menu bar or nav bar.
  const navigate = useNavigate(); // Is used to navigate to another page

  return (
    <div className="min-h-screen bg-black bg-opacity-80">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${"https://media1.giphy.com/media/GiXBNzilzkHH1GY7Vc/200w.gif?cid=6c09b9520x4bs617477w9v7zi2xd0l1xc31lz3ibkec77s9c&ep=v1_gifs_search&rid=200w.gif&ct=g"})`,
          opacity: 0.8, // gif background
        }}
        aria-label={alt}
        role="img"
      ></div>
      <div className="relative z-10">
        <header className="bg-white bg-opacity-60">
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <h1 className="text-2xl font-bold text-zinc-600">TrueYou</h1>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)} // arrow function that gets excluded when button is clicked
                className="text-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <ul // Nav items
              className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-8 text-zinc-900 transition-transform duration-300 ease-in-out ${
                isMenuOpen
                  ? "transform translate-x-0"
                  : "transform -translate-x-full md:translate-x-0"
              }`}
            >
              <li className="border-b md:border-none">
                <a
                  href="/"
                  className="flex items-center py-2 px-4 hover:bg-red-200 transition duration-300"
                >
                  <FaBook className="mr-2" /> Our Story
                </a>
              </li>
              <li className="border-b md:border-none">
                <a
                  href="/"
                  className="flex items-center py-2 px-4 hover:bg-red-200 transition duration-300"
                >
                  <FaUsers className="mr-2" /> Membership
                </a>
              </li>
              <li className="border-b md:border-none">
                <button
                  onClick={() => navigate("/signup")}
                  className="flex items-center py-2 px-4 hover:bg-red-200 transition duration-300"
                >
                  <FaPen className="mr-2" /> Write
                </button>
              </li>
              <li className="border-b md:border-none">
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center py-2 px-4 hover:bg-red-200 transition duration-300"
                >
                  <FaSignInAlt className="mr-2" /> Sign in
                </button>
              </li>
            </ul>
            <button
              onClick={() => navigate("/signup")}
              className="hidden md:block bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition duration-300"
            >
              Get Started
            </button>
          </nav>
        </header>

        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6">
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="—Pngtree—video blogger making video for_7256710.png"
              alt="bg-png"
              className="w-3/4 md:w-full"
            />
          </div>

          <Fade triggerOnce direction="up">
            <div className="md:w-1/2 text-center md:text-left space-y-5 md:ml-8">
              <h1 className="text-4xl font-bold text-white">
                Welcome to TrueYou!
              </h1>
              <p className="text-white text-lg leading-relaxed">
                Your journey towards personalized experience starts here. This
                is your place to bring your ideas to the world.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="bg-zinc-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-400 transition duration-300"
              >
                Start Reading
              </button>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
