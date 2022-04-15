import Image from "next/image";
import Bookmark from 'imgs/logo-bookmark.svg';

const Footer = () => (
  <footer className="bg-bookmark-blue py-8">
    <div className="container flex flex-col md:flex-row items-center">
      <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
        <Image src={Bookmark} alt="" />
        <ul className="flex text-white uppercase gap-12 text-xs">
          <li className="cursor-pointer text-white">Features</li>
          <li className="cursor-pointer text-white">Pricing</li>
          <li className="cursor-pointer text-white">Contact</li>
        </ul>
      </div>
      <div className="flex gap-10 mt-12 md:mt-0">
        <li>
          <i className="text-white text-2xl fab fa-twitter"></i>
        </li>
        <li>
          <i className="text-white text-2xl fab fa-facebook-square"></i>
        </li>
      </div>
    </div>
  </footer>
);

export default Footer;
