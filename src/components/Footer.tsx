import React from "react";

interface FooterLink {
  label: string;
  href: string;
}

const footerColumns: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "*" },
    { label: "Featured Categories", href: "*" },
    { label: "Business", href: "*" },
    { label: "IT", href: "*" },
    { label: "Design", href: "*" },
  ],
  [
    { label: "Development", href: "*" },
    { label: "Marketing", href: "*" },
    { label: "Photography", href: "*" },
    { label: "Finance", href: "*" },
    { label: "Sport", href: "*" },
  ],
  [
    { label: "Become a Creator", href: "*" },
    { label: "Affiliate Program", href: "*" },
    { label: "Contact", href: "*" },
    { label: "Help", href: "*" },
    { label: "About", href: "*" },
  ],
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700">
      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1920px]

          px-5
          py-10

          min-[390px]:px-6
          min-[390px]:py-11

          min-[414px]:px-7
          min-[414px]:py-12

          sm:px-8
          sm:py-12

          md:px-10
          md:py-14

          lg:px-12
          lg:py-16

          xl:px-[6%]
          2xl:px-[8%]
        "
      >
        {/* =======================================================
            TOP FOOTER GRID
        ======================================================== */}
        <div
          className="
            grid
            grid-cols-1

            gap-10

            min-[390px]:gap-11
            min-[414px]:gap-12

            sm:gap-12

            md:grid-cols-2
            md:gap-x-12
            md:gap-y-14

            lg:grid-cols-[1.7fr_1fr_1fr_1fr]
            lg:gap-x-10
            lg:gap-y-0

            xl:grid-cols-[1.8fr_1fr_1fr_1fr]
            xl:gap-x-14

            2xl:gap-x-20
          "
        >
          {/* =====================================================
              NEWSLETTER / BRAND
          ====================================================== */}
          <div
            className="
              w-full
              max-w-[480px]
              md:col-span-2
              lg:col-span-1
            "
          >
            {/* Logo */}
            <a
              href="#"
              className="
                mb-4
                inline-flex
                items-center
                gap-1.5
                sm:mb-5
              "
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center

                  sm:h-10
                  sm:w-10
                "
              >
                <img
                  src="/bbytespace.png"
                  alt="Logo"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              <span
                className="
                  text-[28px]
                  font-bold
                  tracking-[-0.5px]
                  text-[#202020]

                  min-[390px]:text-[29px]
                  min-[414px]:text-[30px]

                  sm:text-[31px]
                "
              >
                ByteSpace
              </span>
            </a>

            {/* Description */}
            <p
              className="
                max-w-[430px]
                text-[13px]
                leading-[1.7]
                text-gray-600

                min-[390px]:text-[13.5px]
                min-[414px]:text-[14px]

                sm:text-[14px]
              "
            >
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                mt-6
                flex
                w-full
                max-w-[365px]
                items-center
                gap-3

                min-[390px]:mt-7
                min-[390px]:gap-3.5

                sm:mt-8
                sm:gap-4
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-[39px]
                  min-w-0
                  flex-1
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  px-4
                  text-[13px]
                  text-gray-700
                  outline-none
                  transition

                  placeholder:text-gray-500

                  focus:border-[#baf000]
                  focus:ring-2
                  focus:ring-[#c8ff00]/20

                  sm:text-[13px]
                "
              />

              <button
                type="submit"
                className="
                  h-[36px]
                  shrink-0
                  rounded-full
                  bg-[#c8ff00]
                  px-4
                  text-[14px]
                  font-medium
                  text-gray-900
                  transition

                  hover:bg-[#b8ef00]
                  hover:shadow-[0_5px_15px_rgba(200,255,0,0.25)]

                  active:scale-[0.98]

                  min-[390px]:px-5
                  sm:text-[15px]
                "
              >
                Search
              </button>
            </form>

            {/* Privacy Text */}
            <p
              className="
                mt-3
                max-w-[370px]
                text-[11px]
                leading-[1.7]
                text-gray-600

                min-[390px]:mt-4
                min-[390px]:text-[11.5px]

                sm:text-[12px]
              "
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* =====================================================
              FOOTER COLUMN 01
          ====================================================== */}
          <FooterColumn column={footerColumns[0]} />

          {/* =====================================================
              FOOTER COLUMN 02
          ====================================================== */}
          <FooterColumn column={footerColumns[1]} />

          {/* =====================================================
              FOOTER COLUMN 03
          ====================================================== */}
          <FooterColumn column={footerColumns[2]} />
        </div>

        {/* =======================================================
            BOTTOM DIVIDER
        ======================================================== */}
        <div
          className="
            mt-12
            border-t
            border-gray-200
            pt-5

            min-[390px]:mt-14

            min-[414px]:mt-16

            sm:mt-20
            sm:pt-5

            md:mt-20

            lg:mt-24

            xl:mt-28
          "
        >
          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-4

              min-[390px]:gap-4

              sm:gap-5

              md:flex-row
              md:items-center

              lg:gap-8
            "
          >
            {/* Copyright */}
            <p
              className="
                text-[11px]
                text-gray-600

                min-[390px]:text-[11.5px]

                sm:text-[12px]
              "
            >
              © 2023 ByteSpace. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div
              className="
                flex
                w-full
                flex-wrap
                items-center
                gap-x-4
                gap-y-2

                min-[390px]:gap-x-5

                sm:gap-x-6

                md:w-auto
                md:justify-end
              "
            >
              <a
                href="#"
                className="
                  whitespace-nowrap
                  text-[11px]
                  text-gray-600
                  transition-colors
                  hover:text-black

                  min-[390px]:text-[11.5px]

                  sm:text-[12px]
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  whitespace-nowrap
                  text-[11px]
                  text-gray-600
                  transition-colors
                  hover:text-black

                  min-[390px]:text-[11.5px]

                  sm:text-[12px]
                "
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="
                  whitespace-nowrap
                  text-[11px]
                  text-gray-600
                  transition-colors
                  hover:text-black

                  min-[390px]:text-[11.5px]

                  sm:text-[12px]
                "
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

/* ================================================================
   FOOTER COLUMN COMPONENT
================================================================ */

interface FooterColumnProps {
  column: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ column }) => {
  return (
    <div className="w-full">
      <ul
        className="
          space-y-3

          min-[390px]:space-y-[13px]

          sm:space-y-[14px]

          md:space-y-[13px]
        "
      >
        {column.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                inline-block
                text-[12px]
                leading-none
                text-gray-600
                transition-all
                duration-200

                hover:translate-x-0.5
                hover:text-black

                min-[390px]:text-[12.5px]

                min-[414px]:text-[13px]

                sm:text-[13px]
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
