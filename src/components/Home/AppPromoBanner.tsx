import {
  Camera,
  Code2,
  Laptop,
  Megaphone,
  PenTool,
  Building2,
} from "lucide-react";

const categories = [
  {
    title: "Design",
    icon: PenTool,
  },
  {
    title: "Development",
    icon: Code2,
  },
  {
    title: "IT & Software",
    icon: Laptop,
  },
  {
    title: "Business",
    icon: Building2,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Photography",
    icon: Camera,
  },
];

export default function AppPromoBanner() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-[54px]">
      <div className="mx-auto w-full max-w-[1064px]">
        {/* Heading */}
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.8px] text-[#080D24] sm:text-[32px] md:text-[34px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mx-auto mt-4 max-w-[820px] text-[14px] font-normal leading-[1.7] text-[#9297A3] sm:text-[15px]">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 grid grid-cols-2 justify-items-center gap-x-5 gap-y-5 sm:mt-14 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-6 md:gap-x-[34px] md:gap-y-0">
          {categories.map(({ title, icon: Icon }) => (
            <button
              key={title}
              type="button"
              className="group flex h-[150px] w-full max-w-[148px] flex-col items-center justify-center rounded-[20px] border border-[#D7D9DE] bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(8,13,36,0.07)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C7FF00] focus-visible:ring-offset-2"
            >
              <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#C7FF00] text-[#0A1026]">
                <Icon
                  size={27}
                  strokeWidth={2.6}
                  aria-hidden="true"
                />
              </span>

              <span className="mt-3.5 whitespace-nowrap text-[16px] font-medium leading-none text-[#24242A]">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
