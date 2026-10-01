import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

const footerColumns: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "#" },
    { label: "Featured Categories", href: "#" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ],
  [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ],
  [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700">
      <div className="mx-auto max-w-[1920px] px-6 py-12 md:px-0 md:py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.8fr_1fr_1fr_1fr] md:gap-10">
          
          <div className="max-w-[480px]">
            <a
              href="#"
              className="mb-4 inline-flex items-center gap-1.5"
            >
 
              <div className="w-7 h-7 flex items-center justify-center">
                <img src="/bbytespace.png" alt="Logo"/>
              </div>
              

              <span className="text-[28px] font-bold tracking-[-0.5px] text-[#202020]">
                ByteSpace
              </span>
            </a>
            <p className="max-w-[430px] text-[11px] leading-[1.7] text-gray-600">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-[365px] items-center gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[39px] min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 text-[11px] text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-[#baf000]"
              />

              <button
                type="submit"
                className="h-[36px] rounded-full bg-[#c8ff00] px-5 text-[12px] font-medium text-gray-900 transition hover:bg-[#b8ef00]"
              >
                Search
              </button>
            </form>

            <p className="mt-4 max-w-[370px] text-[9px] leading-[1.7] text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {footerColumns.map((column, columnIndex) => (
            <div key={columnIndex}>
              <ul className="space-y-[13px]">
                {column.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[10px] leading-none text-gray-600 transition-colors hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24 border-t border-gray-200 pt-5">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-[9px] text-gray-600">
              © 2023 ByteSpace. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#"
                className="text-[9px] text-gray-600 transition-colors hover:text-black"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-600 transition-colors hover:text-black"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-[9px] text-gray-600 transition-colors hover:text-black"
              >
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;