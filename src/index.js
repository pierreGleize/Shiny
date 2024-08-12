import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Survey from "./pages/survey/Survey";
import Header from "./components/header";
import Error from "./components/error/Error";
import Results from "./pages/results/Results";
import Freelances from "./pages/freelances/Index";
import GlobalStyle from "./utils/style/GlobalStyle";
import { ThemeProvider, SurveyProvider } from "./utils/context";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
