import Typography from "@atoms/Typography";
import "./featurescard.scss";

interface IFeaturesCardProps {
  cardStyles: string;
  headerText: string;
  bodyText: string;
}

const FeaturesCard = ({
  cardStyles,
  headerText,
  bodyText,
}: IFeaturesCardProps) => {
  return (
    <div className={`${cardStyles} text-light`}>
      <div className="flex gap-[15px] items-center">
        <span className="w-[15px] h-[15px] bg-light"></span>
        <Typography className="text-4xl font-bold" variant="h5">
          {headerText}
        </Typography>
        <span className="w-[15px] h-[15px] bg-light"></span>
      </div>
      <Typography className="text-2xl font-normal">{bodyText}</Typography>
    </div>
  );
};

export default FeaturesCard;
