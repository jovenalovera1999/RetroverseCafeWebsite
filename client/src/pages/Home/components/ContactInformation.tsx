import ComponentCard from "../../../components/Common/ComponentCard";

const ContactInformation = () => {
  const content = (
    <>
      <div className="flex flex-col gap-4 text-start">
        <span className="text-sm font-medium text-secondary">
          Cellphone Number: 09123456789
        </span>
        <span className="text-sm font-medium text-secondary">
          Email: retroversecafe@gmail.com
        </span>
      </div>
    </>
  );

  return (
    <>
      <ComponentCard title="Contact Information">{content}</ComponentCard>
    </>
  );
};

export default ContactInformation;
