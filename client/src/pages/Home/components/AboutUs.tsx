import ComponentCard from "../../../components/Common/ComponentCard";

const AboutUs = () => {
  const content = (
    <>
      <p className="text-secondary">
        Retroverse Cafe is a welcoming place where you can enjoy a variety of
        flavors. We serve different types of coffee including hot and iced
        options. For those who prefer non-coffee drinks, we offer milk drinks,
        cold brews, frappes, sodas, and our special matcha series. Our menu also
        features burgers, pastries, and snacks. If you’re looking for something
        heavier, we have rice meals that are perfect for any time of the day.
      </p>
    </>
  );

  return (
    <>
      <ComponentCard title="About Us">{content}</ComponentCard>
    </>
  );
};

export default AboutUs;
