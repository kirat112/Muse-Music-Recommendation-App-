import {Facebook, Twitter, Insta} from "../../index.js"

const Footer = () => {
  return (
    <div className="w-full px-5 py-10">
      {/* upper */}
      <div className="flex justify-around">
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
      </div>
      {/* middle */}
      <div className="w-full flex justify-center pr-8 gap-x-4 my-6">
        <a href="#"><Facebook/></a>
        <a href="#"><Twitter/></a>
        <a href="#"><Insta/></a>
      </div>
      {/* lower */}
      <div className="flex justify-center pr-7">
        <span>Copyright 2024 Muse</span>
      </div>
    </div>
  );
};

export default Footer;
