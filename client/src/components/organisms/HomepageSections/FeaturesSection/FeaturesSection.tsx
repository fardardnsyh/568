import FeaturesCard from "@mols/HomepageCards/FeaturesCard";
import Typography from "@atoms/Typography";
import { cardData } from "./cardData";
import SocialsCard from "@mols/HomepageCards/SocialsCard";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col max-w-[1086px]">
        <Typography className="text-dark text-5xl font-bold mb-xl w-[48vw] leading-[58px] max-w-[1086px]">
          Here are some of the features that make Ghostly unique
        </Typography>
        <Typography
          variant="h3"
          className="text-grey text-2xl font-normal mb-[50px] max-w-[1086px]"
        >
          Join the thousands of people who have already discovered the freedom
          and excitement of anonymous messaging. Sign up today and start sharing
          your thoughts and feelings without inhibition.
        </Typography>
      </div>
      <div className="flex flex-wrap gap-[24px] justify-center] max-w-[1086px] mb-[97px]">
        {cardData?.length > 0 &&
          cardData?.map((data, i) => <FeaturesCard key={i} {...data} />)}
      </div>
      <div className="w-[1312px] mb-[135px]">
        <SocialsCard />
      </div>
    </div>
  );
};

export default FeaturesSection;
