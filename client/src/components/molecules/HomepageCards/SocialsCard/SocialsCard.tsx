import Typography from "@atoms/Typography";
import tinyPeople from "@/images/tiny-people.png";
import instagram from "@/images/instagram.svg";
import twitter from "@/images/twitter.svg";
import facebook from "@/images/facebook.svg";

const SocialsCard = () => {
  return (
    <div className="text-light rounded-2xl bg-red flex px-[50px] py-[40px] justify-between">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[30px]">
          <Typography
            className="font-bold text-[64px] leading-[87px]"
            variant="h4"
          >
            Ghostly
          </Typography>
          <Typography className="leading-[38px] text-2xl font-medium max-w-[610px]">
            Share Your Thoughts and Feelings Freely and Anonymously with
            Ghostly: The App That Lets You Speak Your Mind Without Fear of
            Judgment or Consequences
          </Typography>
        </div>
        <div className="flex flex-col gap-[20px]">
          <Typography
            className="leading-[44px] text-[32px] font-semibold text-left"
            variant="h5"
          >
            Reach out to us on our socials
          </Typography>
          <div className="flex items-center">
            <a
              className="flex gap-[15px] items-center"
              href="https://instagram.com"
            >
              <img src={instagram} alt="instagram icon" className="w-[28px]" />
              <Typography className="" variant="h4">
                Instagram
              </Typography>
            </a>
            <span className="bg-light w-[10px] h-[10px] rounded-full ml-[30px] mr-[42px]"></span>

            <a
              className="flex gap-[15px] items-center"
              href="https://twitter.com"
            >
              <img src={twitter} alt="twitter icon" className="w-[28px]" />
              <Typography className="" variant="h4">
                Twitter
              </Typography>
            </a>
            <span className="bg-light w-[10px] h-[10px] rounded-full ml-[30px] mr-[42px]"></span>

            <a className="flex gap-[15px] items-center" href="https://fb.com">
              <img src={facebook} alt="facebook icon" className="w-[28px]" />
              <Typography className="" variant="h4">
                Facebook
              </Typography>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-light rounded-[12px] w-[568px] h-[527px] relative">
        <img
          className="absolute top-0 w-auto h-[527px]"
          src={tinyPeople}
          alt="people"
        />
      </div>
    </div>
  );
};

export default SocialsCard;
