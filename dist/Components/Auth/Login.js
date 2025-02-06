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
import axios from "axios"; // Js library used for making HTTP requests from a web browser
import { useNavigate, Link } from "react-router-dom"; // Used for navigation
const Login = () => {
    //React functional component
    const navigate = useNavigate(); //Navigation hook
    const [email, setEmail] = useState(""); //User email
    const [password, setPassword] = useState(""); // User password
    function submit(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault(); //Form submit
            try {
                yield axios
                    .post(`${process.env.REACT_APP_API_URL}/`, {
                    email,
                    password,
                }) // Backend Api hit
                    .then((res) => {
                    if (res.data.status === "exist") {
                        const userId = res.data.userId;
                        localStorage.setItem("userId", userId);
                        navigate("/main", { state: { userId } });
                    }
                    else if (res.data.status === "Does not exist") {
                        alert("User has not Signed up");
                    }
                })
                    .catch((err) => {
                    alert("Wrong Details"); // error handling
                    console.error(err);
                });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    return (React.createElement("div", { className: "flex justify-center items-center min-h-screen", style: {
            backgroundImage: `url('https://64.media.tumblr.com/eeb75bc0ce9b02e52a9372feddf5f016/4afeef044ac67fda-fd/s540x810/7c1634a12966abe75962eb165d659557af7d71f3.gif')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        } },
        React.createElement("div", { className: "bg-white bg-opacity-60 shadow-lg rounded-lg p-8 w-96" },
            React.createElement("h1", { className: "text-2xl font-bold text-gray-800 text-center mb-6" }, "Login"),
            React.createElement("form", { onSubmit: submit, className: "space-y-4" },
                React.createElement("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Email", className: "w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400", required: true }),
                React.createElement("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Password", className: "w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400", required: true }),
                React.createElement("button", { type: "submit", className: "w-full bg-red-400 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300" }, "Login")),
            React.createElement(Link, { to: "/signup", className: "block text-center text-black hover:underline mt-4" }, "Don't have an account? Sign-Up here"))));
};
export default Login;
//# sourceMappingURL=Login.js.map