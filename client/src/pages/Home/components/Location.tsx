import ComponentCard from "../../../components/Common/ComponentCard";

const Location = () => {
  const content = (
    <>
      <div className="items-center justify-center text-start">
        <span className="text-sm font-medium text-secondary">
          Mabini Street, Roxas City, Capiz, Philippines 5800
        </span>
      </div>
    </>
  );

  return (
    <>
      <ComponentCard title="Location">{content}</ComponentCard>
    </>
  );
};

export default Location;
