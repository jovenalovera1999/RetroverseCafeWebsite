import PageMeta from "../../components/Common/PageMeta";
import ContactInformation from "./components/ContactInformation";
import AboutUs from "./components/AboutUs";
import Location from "./components/Location";
import ProductList from "./components/ProductList";
import Gallery from "./components/Gallery";

const HomeMainPage = () => {
  return (
    <>
      <PageMeta title="Home" />

      <div id="about_us" className="mb-4">
        <AboutUs />
      </div>
      <div id="product_list" className="mb-4">
        <ProductList />
      </div>
      <div id="gallery" className="mb-4">
        <Gallery />
      </div>
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div id="location" className="col-span-2 md:col-span-1">
            <Location />
          </div>
          <div id="contact_information" className="col-span-2 md:col-span-1">
            <ContactInformation />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainPage;
