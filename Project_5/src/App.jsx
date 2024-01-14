import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Chat from "./components/Chat";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
