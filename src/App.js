import CarouselBanner from "./Components/Carousal Banner/CarousalBanner";
import CustomerService from "./Components/Customer Service/CustomerService";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/Search Bar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <NavBar />
      <CarouselBanner />
      <CustomerService />
      <Footer />
    </>
  );
}

export default App;
