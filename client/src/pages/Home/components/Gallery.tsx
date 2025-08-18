import Marquee from "react-fast-marquee";
import AnotherRetroverseCafeStore from "../../../assets/img/AnotherRetroverseCafeStore.png";
import BoardGames from "../../../assets/img/BoardGames.png";
import CafeAtNight from "../../../assets/img/CafeAtNight.png";
import ChickenWings from "../../../assets/img/ChickenWings.png";
import CompanyLogo from "../../../assets/img/CompanyLogo.png";
import DifferentDrinks from "../../../assets/img/DifferentDrinks.png";
import DifferentFoodsDisplay from "../../../assets/img/DifferentFoodsDisplay.png";
import DiscsDecorations from "../../../assets/img/DiscsDecorations.png";
import FriedChicken from "../../../assets/img/FriedChicken.png";
import InsideCounter from "../../../assets/img/InsideCounter.png";
import MilkteaExplaination from "../../../assets/img/MilkteaExplaination.png";
import Nuggets from "../../../assets/img/Nuggets.png";
import PorkAdobo from "../../../assets/img/PorkAdobo.png";
import RetroverseCafeStore from "../../../assets/img/RetroverseCafeStore.png";
import SodaDifferentFlavors from "../../../assets/img/SodaDifferentFlavors.png";
import StickyNotesWall from "../../../assets/img/StickyNotesWall.png";
import ComponentCard from "../../../components/Common/ComponentCard";

const Gallery = () => {
  type ImageType = {
    img: string;
  };

  const images: ImageType[] = [
    {
      img: AnotherRetroverseCafeStore,
    },
    {
      img: BoardGames,
    },
    {
      img: CafeAtNight,
    },
    {
      img: ChickenWings,
    },
    {
      img: CompanyLogo,
    },
    {
      img: DifferentDrinks,
    },
    {
      img: DifferentFoodsDisplay,
    },
    {
      img: DiscsDecorations,
    },
    {
      img: FriedChicken,
    },
    {
      img: InsideCounter,
    },
    {
      img: MilkteaExplaination,
    },
    {
      img: Nuggets,
    },
    {
      img: PorkAdobo,
    },
    {
      img: RetroverseCafeStore,
    },
    {
      img: SodaDifferentFlavors,
    },
    {
      img: StickyNotesWall,
    },
  ];

  const content = (
    <>
      <div>
        <Marquee speed={80} delay={0}>
          <div className="flex gap-4 px-2">
            {images.map((image, index) => (
              <img
                src={image.img}
                key={index}
                className="w-auto h-40 object-contain"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );

  return (
    <>
      <ComponentCard title="Gallery">{content}</ComponentCard>
    </>
  );
};

export default Gallery;
