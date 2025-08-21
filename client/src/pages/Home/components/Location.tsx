import ComponentCard from "../../../components/Common/ComponentCard";
import AnotherRetroverseCafeStore from "../../../assets/img/AnotherRetroverseCafeStore.png";

const Location = () => {
  const content = (
    <>
      <div className="flex text-start gap-4">
        <img
          src={AnotherRetroverseCafeStore}
          alt="Retroverse Cafe Store"
          className="object-cover w-52"
        />
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
