var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from "react";
import axios from "axios"; // js library used for making HTTP requests from a web browser
import { useNavigate, Link } from "react-router-dom"; // used for navigation
const SignUp = () => {
    // React functional component
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // user email
    const [password, setPassword] = useState(""); // user password
    const submit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault(); // Ts function designed to handle a form submission in a react component
        try {
            const response = yield axios.post(`${process.env.REACT_APP_API_URL}/signup`, //backend api hit
            {
                email,
                password,
            });
            if (response.data === "exist") {
                alert("User already exists");
            }
            else if (response.data.status === "User created successfully") {
                navigate("/login");
            }
        }
        catch (error) {
            alert("Wrong Details");
            console.error(error);
        }
    });
    return (React.createElement("div", { className: "flex justify-center items-center min-h-screen", style: {
            backgroundImage: `url('https://i.pinimg.com/originals/bc/87/e5/bc87e5124f8d2cfe810d403adc96ad01.gif')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        } },
        React.createElement("div", { className: "bg-white bg-opacity-70 shadow-lg rounded-lg p-8 w-96" },
            React.createElement("h1", { className: "text-2xl font-bold text-center text-black mb-6" }, "Sign-Up"),
            React.createElement("form", { onSubmit: submit },
                React.createElement("input", { type: "email", onChange: (e) => setEmail(e.target.value), placeholder: "Email", name: "username", id: "username", className: "w-full px-4 py-2 mb-4 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" }),
                React.createElement("input", { type: "password", onChange: (e) => setPassword(e.target.value), placeholder: "Password", name: "password", id: "password", className: "w-full px-4 py-2 mb-6 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" }),
                React.createElement("button", { type: "submit", className: "w-full bg-black hover:bg-gray-600 text-white py-2 rounded-md font-semibold transition duration-300" }, "Signup")),
            React.createElement("div", { className: "mt-4 text-center" },
                React.createElement(Link, { to: "/login", className: "text-black hover:underline text-sm" }, "Already have an account? Login here")))));
};
export default SignUp;
//# sourceMappingURL=Signup.js.map