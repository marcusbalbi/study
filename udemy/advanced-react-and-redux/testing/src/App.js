import React from "react";
import { AppReduxProvider } from "./redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PostPage } from "./pages/PostPage";
import { Header } from "./components/Header";


const App = () => {
  return (
    <AppReduxProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </Router>
    </AppReduxProvider>
  );
};

export default App;
