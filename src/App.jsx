import React from "react";
import Loader from "./component/Loader";
import QuizConfig from "./component/QuizConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <QuizConfig
              // settings={settings}
              // setSettings={setSettings}
              // onStart={() => console.log("START", settings)}
              />
            }
          />

          {/* <Route path="/quiz" element={<Quiz />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
