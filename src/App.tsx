import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Processing from "../pages/Processing";
import Results from "../pages/Results";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}