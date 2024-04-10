import Navbar from "../component/Navbar";
import MainP from "../component/Home/MainP";
import About from "../component/Home/About";
import Categories from "../component/Home/Categories";
import Testimonials from "../component/Home/Testimonials";
import Footer from "../component/Home/Footer";
import Sidebar from "../component/Sidebar";
import Description from "../component/Home/Description";
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
