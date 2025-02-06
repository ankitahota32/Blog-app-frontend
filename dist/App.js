import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import SignUp from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import Main from "./Components/Main";
import Post from "./Components/Post";
import PostDetails from "./Components/PostDetails";
import "./App.css";
import "./index.css";
import Profile from "./Components/Profile";
const App = () => {
    return (React.createElement(Router, null,
        React.createElement("div", { className: "App" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Homepage, { src: "fronted/public/Lovepik_com-450125116-A skillfully crafted flat illustration of web development.png", alt: "Animated GIF" }) }),
                React.createElement(Route, { path: "/signup", element: React.createElement(SignUp, null) }),
                React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
                React.createElement(Route, { path: "/main", element: React.createElement(Main, null) }),
                React.createElement(Route, { path: "/post", element: React.createElement(Post, null) }),
                React.createElement(Route, { path: "/post/:id", element: React.createElement(PostDetails, null) }),
                React.createElement(Route, { path: "/profile", element: React.createElement(Profile, { userId: "" }) })))));
};
export default App;
//# sourceMappingURL=App.js.map