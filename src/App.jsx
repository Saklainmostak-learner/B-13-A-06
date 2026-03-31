import { useState } from "react";
import { ShoppingCart, Menu, X, Play } from "lucide-react";
import bannerImg from "./assets/banner.png";
import roundImg from "./assets/round.png";

export default function App() {
  const [cart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* navbar */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="">
            <h1 className="text-2xl font-bold ">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                DigiTools
              </span>
            </h1>
          </div>
          <nav className="items-center gap-7 lg:flex hidden">
            <a href="#" className="text-sm font-medium text-[#101727]">
              Products
            </a>
            <a href="#" className="text-sm font-medium text-[#101727]">
              Features
            </a>
            <a href="#" className="text-sm font-medium text-[#101727]">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-[#101727]">
              Testimonials
            </a>
            <a href="#" className="text-sm font-medium text-[#101727]">
              FAQ
            </a>
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <button className="relative text-[#101727]">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9514FA] px-1 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            </button>
            <button className="text-sm font-medium text-[#101727]">
              Login
            </button>
            <button className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2.5 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="flex items-center gap-4 lg:hidden">
            <button className="relative text-[#101727]">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9514FA] px-1 text-[10px] font-bold text-white">
                {cart.length}
              </span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#101727]"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
              <a href="#" className="text-sm font-medium text-[#101727]">
                Products
              </a>
              <a href="#" className="text-sm font-medium text-[#101727]">
                Features
              </a>
              <a href="#" className="text-sm font-medium text-[#101727]">
                Pricing
              </a>
              <a href="#" className="text-sm font-medium text-[#101727]">
                Testimonials
              </a>
              <a href="#" className="text-sm font-medium text-[#101727]">
                FAQ
              </a>
              <button className="w-fit text-sm font-medium text-[#101727]">
                Login
              </button>
              <button className="w-fit rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2.5 text-sm font-semibold text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>
      {/* herosection */}
      <main>
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-4 py-[60px] sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="max-w-[520px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E1E7FF] px-4 py-2 ">
                <img src={roundImg} alt="" className="h-3 w-3" />
                <span className="text-[14px] font-medium text-[#6C3CF4]">
                  New: AI-Powered Tools Available
                </span>
              </div>
              <h1 className="mt-6 text-[48px] font-extrabold text-[#1F2937] leading-[0.98] tracking-[-0.03em] lg:text-[52px]">
                Supercharge Your <br />
                Digital Workflow
              </h1>
              <p className="mt-5 max-w-[470px] leading-[1.9] text-[17px] text-[#6B7280] ">
                Access premium AI tools, design assets, templates, and productivity
                <br />
                software—all in one place. Start creating faster today. <br />
                Explore Products
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm">
                  Explore Products
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED] px-6 py-3.5 text-[15px] font-semibold text-[#6C3CF4]">
                  <Play className="h-4 w-4" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end ">
              <div className="h-[480px] w-full max-w-[420px] overflow-hidden rounded-sm lg:translate-x-6">
                <img
                  src={bannerImg}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        {/* star section */}
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 px-6 py-9 text-white md:grid-cols-3 ">
            <div className="py-3 text-center md:border-r md:border-white/25">
              <h2 className="text-[56px] font-extrabold">50K+</h2>
              <p className="mt-3 text-[18px] text-white/90">Active Users</p>
            </div>
            <div className="py-3 text-center md:border-r md:border-white/25">
              <h2 className="text-[56px] font-extrabold">200+</h2>
              <p className="mt-3 text-[18px] text-white/90">Premium Tools</p>
            </div>
            <div className="py-3 text-center ">
              <h2 className="text-[56px] font-extrabold">4.9</h2>
              <p className="mt-4 text-[18px] text-white/90">Rating</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
