import instagramImg from "./assets/Instagram.png";
import facebookImg from "./assets/Facebook.png";
import twitterImg from "./assets/Twitter.png";
const Footer = () => {
  return (
    <footer className="bg-[#101727] text-[#627382] pt-16 pb-6 ">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-[22px] font-bold text-white mb-3">DigiTools</h2>
            <p className="text-[11px] leading-6 text-[#627382] max-w-[300px]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-[11px]">
              <li className="cursor-pointer hover:text-white">Features</li>
              <li className="cursor-pointer hover:text-white">Pricing</li>
              <li className="cursor-pointer hover:text-white">Templates</li>
              <li className="cursor-pointer hover:text-white">Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-[11px]">
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-[11px]">
              <li className="cursor-pointer hover:text-white">Documentation</li>
              <li className="cursor-pointer hover:text-white">Help Center</li>
              <li className="cursor-pointer hover:text-white">Community</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Social Links</h3>
            <div className="mt-5 flex gap-3">
              <div className="p-2 bg-[#627382] rounded-full hover:bg-gray-700 cursor-pointer">
                <img src={instagramImg} alt="" className="h-6 w-6" />
              </div>
              <div className="p-2 bg-[#627382] rounded-full hover:bg-gray-700 cursor-pointer">
                <img src={facebookImg} alt=""  className="h-6 w-6"/>
              </div>
              <div className="p-2 bg-[#627382] rounded-full hover:bg-gray-700 cursor-pointer">
                <img src={twitterImg} alt=""  className="h-6 w-6"/>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#627382] mt-10 pt-6 flex flex-col md:flex-row justify-center items-center text-[11px] text-[#627382] ">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-5 mt-4 md:mt-0">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
