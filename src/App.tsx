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

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                src="fronted/public/Lovepik_com-450125116-A skillfully crafted flat illustration of web development.png"
                alt="Animated GIF"
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/profile" element={<Profile userId={""} />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
