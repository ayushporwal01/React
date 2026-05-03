import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import AppLayout from "./components/AppLayout";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route
              path="about"
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <About />
                </Suspense>
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="restaurants/:resId" element={<RestaurantMenu />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
