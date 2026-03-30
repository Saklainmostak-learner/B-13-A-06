import { useState } from "react";
import {ShoppingCart,Menu,X} from "lucide-react";

export default function App() {
  const [cart]=useState([]);
  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-8">
      <div className="">
       <h1 className="text-xl font-bold "><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</span></h1>
        </div> 
        <nav className="items-center gap-7 lg:flex hidden">
          <a href="#" className="text-sm font-medium text-[#101727]">Products</a>
          <a href="#" className="text-sm font-medium text-[#101727]">Features</a>
          <a href="#" className="text-sm font-medium text-[#101727]">Pricing</a>
          <a href="#" className="text-sm font-medium text-[#101727]">Testimonials</a>
          <a href="#" className="text-sm font-medium text-[#101727]">FAQ</a>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <button className="relative text-[#101727]">
            <ShoppingCart className="h-5 w-5"/>
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9514FA] px-1 text-[10px] font-bold text-white">
              {cart.length}
            </span>
          </button>
          <button className="text-sm font-medium text-[#101727]">Login</button>
          <button className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2.5 text-sm font-semibold text-white">Get Started</button>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <button className="relative text-[#101727]">
            <ShoppingCart className="h-5 w-5"/>
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#9514FA] px-1 text-[10px] font-bold text-white">
              {cart.length}
            </span>
          </button>
          <button onClick={()=> setMenuOpen(!menuOpen)} className="text-[#101727]">
            {menuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>
      {menuOpen &&(
        <div className="border-t border-gray-200 bg-white lg:hidden">
        <div className="mx-auto flex mx-w-7xl flex-col gap-4 px-4 py-4 sm:px-6">
        <a href="#" className="text-sm font-medium text-[#101727]">Products</a>
          <a href="#" className="text-sm font-medium text-[#101727]">Features</a>
          <a href="#" className="text-sm font-medium text-[#101727]">Pricing</a>
          <a href="#" className="text-sm font-medium text-[#101727]">Testimonials</a>
          <a href="#" className="text-sm font-medium text-[#101727]">FAQ</a>
          <button className="w-fit text-sm font-medium text-[#101727]">Login</button>
          <button className="w-fit rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2.5 text-sm font-semibold text-white">Get Started</button>
        </div>
        </div>
      )}
    </header>
  );
}