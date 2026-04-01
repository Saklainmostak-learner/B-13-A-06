import { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Play,
  UserRound,
  Package,
  Rocket,
  Check,
} from "lucide-react";
import bannerImg from "./assets/banner.png";
import roundImg from "./assets/round.png";
import aiWritingImg from "./assets/writing.png";
import designIMg from "./assets/design-tool.png";
import premiumImg from "./assets/premium.png";
import automationImg from "./assets/operation.png";
import resumeImg from "./assets/portfolio.png";
import socialImg from "./assets/social-media.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./footer";
const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description:
      "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "Mo",
    tag: "Best Seller",
    tagColor: "bg-[#FFF1D6] text-[#D97706]",
    icon: aiWritingImg,
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker",
    ],
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description:
      "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "One-Time",
    tag: "Popular",
    tagColor: "bg-[#EEE9FF] text-[#6C3CF4]",
    icon: designIMg,
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description:
      "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "Mo",
    tag: "New",
    tagColor: "bg-[#DCFCE7] text-[#16A34A]",
    icon: premiumImg,
    features: ["10M+ assets", "Commercial use", "No attribution"],
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description:
      "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "Mo",
    tag: "Popular",
    tagColor: "bg-[#EEE9FF] text-[#6C3CF4]",
    icon: automationImg,
    features: ["50+ automations", "API access", "Custom workflows"],
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description:
      "Create professional resumes and cover letters that land interviews.",
    price: 15,
    period: "One-Time",
    tag: "New",
    tagColor: "bg-[#DCFCE7] text-[#16A34A]",
    icon: resumeImg,
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description:
      "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "Mo",
    tag: "Best Seller",
    tagColor: "bg-[#FFF1D6] text-[#D97706]",
    icon: socialImg,
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
  },
];
const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    icon: UserRound,
  },
  {
    id: "02",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: Package,
  },
  {
    id: "03",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: Rocket,
  },
];
const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    badge: "",
    featured: false,
    buttonText: "Get Started Free",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
  },
  {
    id: 2,
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    period: "/Month",
    badge: "Most Popular",
    featured: true,
    buttonText: "Start Pro Trial",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    period: "/Month",
    badge: "",
    featured: false,
    buttonText: "Contact Sales",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
  },
];
export default function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("products");
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };
  const handleRemoveFromCart = (indexToRemove) => {
    const removedItem = cart[indexToRemove];
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
    toast.error(`${removedItem.name} removed from cart`);
  };
  const handleCheckout = () => {
    setCart([]);
  };
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
            <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-4 sm:px-6">
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
                Access premium AI tools, design assets, templates, and
                productivity
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
        {/* cart Section */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[45px] font-extrabold leading-tight text-[#101727]">
                Premium Digital Tools
              </h2>
              <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-7 text-[#6B7280]">
                Choose from our curated collection of premium digital products
                designed <br /> to boost your productivity and creativity.
              </p>
              <div className="mt-8 inline-flex rounded-full border border-[#E5E7EB] bg-white p-1">
                <button
                  onClick={() => setActiveTab("products")}
                  className={`rounded-full px-8 py-3 text-[15px] font-semibold transition ${
                    activeTab === "products"
                      ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                      : "text-[#101727]"
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => setActiveTab("cart")}
                  className={`rounded-full px-8 py-3 text-[15px] font-semibold transition ${
                    activeTab === "cart"
                      ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                      : "text-[#101727]"
                  } `}
                >
                  Cart ({cart.length})
                </button>
              </div>
            </div>
            {activeTab === "products" && (
              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-[16px] border border-[#E5E7EB] bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between ">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[22px]">
                        <img
                          src={product.icon}
                          alt={product.name}
                          className="h-6 w-6 object-contain"
                        />
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[12px] font-medium ${product.tagColor}`}
                      >
                        {product.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[18px] font-extrabold text-[#101727] ">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-6 text-[#6B7280]">
                      {product.description}
                    </p>
                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-[34px] font-extrabold text-[#101727]">
                        ${product.price}
                      </span>
                      <span className="pb-1 text-[14px] text-[#6B7280]">
                        /{product.period}
                      </span>
                    </div>
                    <div>
                      {product.features.map((features, index) => (
                        <p
                          key={index}
                          className="flex items-center gap-2 text-[14px] text-[#6B7280]"
                        >
                          <span className="text-[#16A34A]">✓</span>
                          {features}
                        </p>
                      ))}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-6 w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3 text-[14px] font-semibold text-white"
                    >
                      Buy Now
                    </button>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "cart" && (
              <div className="mt-10 rounded-[16px] border border-[#E5E7EB] bg-white p-6 shadow-sm">
                {cart.length === 0 ? (
                  <p className="text-center text-[16px] text-[#6B7280]">
                    Your Cart is empty.
                  </p>
                ) : (
                  <>
                    <div className="space-y-4">
                      {cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-4 rounded-[14px] border border-[#E5E7EB] p-4 md:flex-row md:items-center md:justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5E7EB] text-[22px]">
                              <img
                                src={item.icon}
                                alt={item.name}
                                className="h-6 w-6 object-contain"
                              />
                            </div>
                            <div>
                              <h4 className="text-[17px] font-bold text-[#101727]">
                                {item.name}
                              </h4>
                              <p className="text-[14px] text-[#6B7280]">
                                ${item.price} / {item.period}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => handleRemoveFromCart(index)}
                            className="rounded-full border border-red-200 px-5 py-2 text-[14px] font-semibold text-red-500"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 border-t border-[#E5E7EB] pt-6">
                      <div className="mb-4 flex items-center justify-between text-[16px] font-semibold text-[#101727]">
                        <span>Total:</span>
                        <span>${totalPrice}</span>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3 text-[14px] font-semibold text-white"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
        {/* get star section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[42px] font-extrabold leading-tight text-[#101727]">
                Get Started in 3 Steps
              </h2>
              <p className="mx-auto mt-3 max-w-[500px] text-[15px] leading-tight text-[#6B7280]">
                Start using premium digital tools in minutes, not hours.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="relative rounded-[16px] border border-[#ECECF2] bg-white px-6 py-8 text-center shadow-sm"
                  >
                    <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[11px] font-semibold text-white">
                      {step.id}
                    </div>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F3E8FF] text-[#7C3AED]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-[22px] font-extrabold text-[#101727]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-6 text-[#6B7280]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* pricing section  */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[42px] font-extrabold leading-tight text-[#101727]">
                Simple, Transparent Pricing
              </h2>
              <p className="mx-auto mt-3 max-w-[500px] text-[15px] leading-tight text-[#6B7280]">
                Choose the plan that fits your needs. Upgrade or downgrade
                anytime.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex h-full flex-col rounded-[18px] border p-6 shadow-sm ${
                    plan.featured
                      ? "border-transparent bg-linear-to-r from-[#6C3CF4] to-[#9514FA] text-white"
                      : "border-[#ECECF2] bg-white text-[#101727]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFE8A3] px-3 py-1 text-[11px] font-semibold text-[#A16207]">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-[22px] font-extrabold">{plan.name}</h3>
                  <p
                    className={`mt-2 text-[14px] ${
                      plan.featured ? "text-white/80" : "text-[#6B7280]"
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-[42px] font-extrabold leading-none">
                      {plan.price}
                    </span>
                    <span
                      className={`pb-1 text-[14px] ${
                        plan.featured ? "text-white/80" : "text-[#6B7280]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <div className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature, index) => (
                      <p
                        key={index}
                        className={`flex items-center gap-2 text-[14px] ${
                          plan.featured ? "text-white/80" : "text-[#6B7280]"
                        }`}
                      >
                        <Check className="h-4 w-4 text-[#22C55E]" />
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                  <div className="pt-8">
                    <button
                      className={`w-full px-6 py-3 text-[14px] font-semibold rounded-full ${
                        plan.featured
                          ? "bg-white text-[#6C3CF4]"
                          : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* workflow section */}
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 text-white ">
          <div className="mx-auto max-w-[1100px] px-4 text-center sm:px-6 lg:px-8 ">
            <h2 className="text-[42px] font-extrabold leading-tight">
              Ready to Transform Your Workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-[660px] text-[15px] leading-7 text-white/80 ">
              Join thousands of professionals who are already using Digitools to
              work smarter. <br /> Start your free trial today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#6C3CF4]">
                Explore Products
              </button>
              <button className="rounded-full border border-white/50  px-6 py-3 text-[14px] font-semibold text-white">
                View Pricing
              </button>
            </div>
            <p className="mt-6 text-[13px] text-white/70">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>
        <ToastContainer position="top-right" autoClose={2000} />
      </main>

      <Footer />
    </>
  );
}
