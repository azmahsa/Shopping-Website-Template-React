import Navbar from "../component/Navbar";
import MainP from "../component/Home/MainP";
import Description from "../component/Home/description";
import About from "../component/Home/About";
import Categories from "../component/Home/Categories";
import Testimonials from "../component/Home/Testimonials";
import Footer from "../component/Home/Footer";
import Sidebar from "../component/Sidebar";

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainP />
      <Description />
      <About />
      <Categories />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
