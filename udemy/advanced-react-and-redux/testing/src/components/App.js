import React from "react";
import { AppReduxProvider } from "../redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { PostPage } from "../pages/PostPage";


const App = () => {
  return (
    <AppReduxProvider>
      <Router>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <button>SignIn</button>
          </li>
          <li>
            <button>SignOut</button>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </Router>
    </AppReduxProvider>
  );
};

export default App;
