import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import clientmaker from "../assets/client-maker.svg";
import clientmeet from "../assets/client-meet.svg";
import imageHeroDesktop from "../assets/image-hero-desktop.png";

const Hero = () => {
  return (
    <section className="max-w-screen-xl mx-auto h-full lg:hero-height flex flex-col-reverse gap-[50px] lg:gap-0 lg:flex-row items-center">
      {/* Left */}
      <div className="flex flex-1 flex-col items-start justify-center text-center lg:text-left gap-[20px] lg:gap-[50px]">
        <h1 className="hidden lg:flex lg:text-[80px] leading-[70px] font-bold ">
          Make
          <br /> remote work
        </h1>
        <h1 className="flex lg:hidden w-full justify-center text-[40px] leading-[70px] font-bold ">
          Make remote work
        </h1>
        <p className="text-[#727272] text-[18px] max-w-[450px] font-semibold">
          Get your team in sync, no matter your location. <br /> Streamline
          processes, create team rituals, and watch productivity soar.
        </p>
        <div className="flex justify-center items-center lg:justify-start w-full">
          <button className=" bg-[#151515] text-white py-2 px-6 rounded-[10px] mb-[40px]">
            Learn more
          </button>
        </div>

        <div className="flex items-center justify-center lg:justify-start w-full gap-[30px]">
          <img src={databiz} alt="databiz" className="w-[70px] lg:w-[90px]" />
          <img
            src={audiophile}
            alt="audiophile"
            className="w-[70px] lg:w-[90px]"
          />
          <img
            src={clientmaker}
            alt="clientmaker"
            className="w-[70px] lg:w-[90px]"
          />
          <img
            src={clientmeet}
            alt="clientmeet"
            className="w-[70px] lg:w-[90px]"
          />
        </div>
      </div>
      {/* Right */}
      <div className="flex-1 flex justify-center">
        <img src={imageHeroDesktop} alt="hero image" className="w-[70%]" />
      </div>
    </section>
  );
};

export default Hero;
