import Image from "next/image";
import HeroBg from 'imgs/hero-bg.png';

const Section1 = () => (
  <section className="relative">
    <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="text-bookmark-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
          A Simple Bookmark Manager
        </h2>
        <p className="text-bookmark-grey text-lg text-center lg:text-left mb-6">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <button
            type="button"
            className="btn btn-purple hover:bg-bookmark-white hover:text-black"
          >
            Get it on Chrome
          </button>
          <button
            type="button"
            className="btn btn-white hover:bg-bookmark-purple hover:text-white"
          >
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
        <Image
          className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
          src={HeroBg}
          alt=""
        />
      </div>
    </div>
    <div
      className="
      hidden
      md:block
      overflow-hidden
      bg-bookmark-purple
      rounded-l-full
      absolute
      h-80
      w-2/4
      top-32
      right-0
      lg:
      -bottom-28
      lg:-right-36
    "
    ></div>
  </section>
);

export default Section1;
