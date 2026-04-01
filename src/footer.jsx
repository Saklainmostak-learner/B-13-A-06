import instagramImg from "./assets/Instagram.png";
import facebookImg from "./assets/Facebook.png";
import twitterImg from "./assets/Twitter.png";
const Footer = () => {
  return (
    <footer className="bg-[#101727] text-[#627382] pt-16 pb-6 ">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] md:items-start">
          <div >
            <h2 className="text-[40px] font-extrabold text-white">DigiTools</h2>
            <p className="mt-6 max-w-[360px] text-[16px] leading-10 text-[#627382]">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-white">
              Product
            </h3>
            <ul className="space-y-4 text-[16px] text-[#627382]">
              <li className="cursor-pointer hover:text-white">Features</li>
              <li className="cursor-pointer hover:text-white">Pricing</li>
              <li className="cursor-pointer hover:text-white">Templates</li>
              <li className="cursor-pointer hover:text-white">Integrations</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-white">Company</h3>
            <ul className="space-y-4 text-[16px] text-[#627382]">
              <li className="cursor-pointer hover:text-white">About</li>
              <li className="cursor-pointer hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-white">Resources</h3>
            <ul className="space-y-4 text-[16px] text-[#627382]">
              <li className="cursor-pointer hover:text-white">Documentation</li>
              <li className="cursor-pointer hover:text-white">Help Center</li>
              <li className="cursor-pointer hover:text-white">Community</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-[18px] font-semibold text-white">Social Links</h3>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <img
                  src={instagramImg}
                  alt="Instagram"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <img
                  src={facebookImg}
                  alt="Facebook"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <img
                  src={twitterImg}
                  alt="Twitter"
                  className="h-7 w-7 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t border-[#223047] pt-8 text-[14px] text-[#627382] md:flex-row">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="mt-4 flex gap-8 md:mt-0">
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
