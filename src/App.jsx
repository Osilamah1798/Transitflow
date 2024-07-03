import "./App.css";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import WhyChoose from "./components/whyChoose";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full min-h-dvh p-0 m-0">
      <Header />
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <Testimonials />
      <WhyChoose />
      <Team />
      <Contact />
      <Blog />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  );
}

export default App;
