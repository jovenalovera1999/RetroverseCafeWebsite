import PageMeta from "../../components/Common/PageMeta";
import ContactInformation from "./components/ContactInformation";
import Description from "./components/Description";
import Location from "./components/Location";
import ProductList from "./components/ProductList";

const HomeMainPage = () => {
  return (
    <>
      <PageMeta title="Home" />

      <div className="mb-4">
        <Description />
      </div>
      <div className="mb-4">
        <ProductList />
      </div>
      <div className="mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <Location />
          </div>
          <div className="col-span-2 md:col-span-1">
            <ContactInformation />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMainPage;
