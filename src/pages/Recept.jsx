import ReceptCard from "../components/recept/ReceptCard";

const Recept = () => {
  return (
    <div className="container flex items-center min-h-screen w-full py-32 max-sm:flex-col">
        <ReceptCard></ReceptCard>
        <ReceptCard></ReceptCard>
        <ReceptCard></ReceptCard>
    </div>
  );
};

export default Recept;
