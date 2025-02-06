import React, { useState } from "react";
import axios from "axios"; // js library used for making HTTP requests from a web browser
import { useNavigate, Link } from "react-router-dom"; // used for navigation

const SignUp: React.FC = () => {
  // React functional component
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>(""); // user email
  const [password, setPassword] = useState<string>(""); // user password

  const submit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault(); // Ts function designed to handle a form submission in a react component
    try {
      const response = await axios.post(
        `https://blog-app-backend-d73u.onrender.com/signup`, //backend api hit
        {
          email,
          password,
        }
      );

      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data.status === "User created successfully") {
        navigate("/login");
      }
    } catch (error) {
      alert("Wrong Details");
      console.error(error);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} //Signup page gif
    >
      <div className="bg-white bg-opacity-70 shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Sign-Up
        </h1>
        <form onSubmit={submit}>
          <input
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Email"
            name="username"
            id="username"
            className="w-full px-4 py-2 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            name="password"
            id="password"
            className="w-full px-4 py-2 mb-6 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-600 text-white py-2 rounded-md font-semibold transition duration-300"
          >
            Signup
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-black hover:underline text-sm">
            Already have an account? Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
