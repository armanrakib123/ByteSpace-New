export default function Home_6() {
  return (
    <main className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden bg-[#123FDF] px-5 py-16 sm:min-h-[480px] md:min-h-[520px] lg:min-h-[540px]">
      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.65) 1px, transparent 1px)",
          backgroundSize: "86px 86px",
        }}
      />

      {/* Decorative shapes */}
      <Decorations />

      {/* Content */}
      <section className="relative z-10 mx-auto flex w-full max-w-[850px] flex-col items-center text-center">
        <h1 className="max-w-[620px] text-[31px] font-bold leading-[1.08] tracking-[-1px] text-white sm:text-[38px] md:text-[44px] lg:text-[46px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h1>

        <p className="mt-7 max-w-[700px] text-[11px] font-normal leading-[1.85] text-white/85 sm:text-[12px] md:text-[13px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your first
          course on the ByteSpace Course Library.
        </p>

        <a
          href="#"
          className="mt-7 inline-flex h-[36px] items-center justify-center rounded-full bg-[#C7FF00] px-5 text-[11px] font-medium text-[#192200] shadow-[0_6px_18px_rgba(0,0,0,.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#D7FF38] hover:shadow-[0_9px_24px_rgba(0,0,0,.2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#123FDF] sm:h-[38px] sm:px-6 sm:text-[12px]"
        >
          Join as Creator
        </a>
      </section>
    </main>
  );
}

function Decorations() {
  return (
    <>
      {/* Top-left lime strokes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-8 h-[110px] w-[135px] -rotate-[8deg] sm:-left-5 sm:-top-6"
      >
        <span className="absolute left-[-10px] top-[2px] h-[25px] w-[125px] rotate-[8deg] rounded-full bg-[#C7FF00]" />
        <span className="absolute left-[-28px] top-[40px] h-[25px] w-[125px] rotate-[32deg] rounded-full bg-[#C7FF00]" />
        <span className="absolute left-[-33px] top-[76px] h-[25px] w-[105px] rotate-[38deg] rounded-full bg-[#C7FF00]" />
      </div>

      {/* Top-left white squiggle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[5%] hidden h-[90px] w-[80px] rotate-[10deg] sm:block"
      >
        <Squiggle color="#FFFFFF" />
      </div>

      {/* Top-right triangle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[4%] h-[90px] w-[90px] rotate-[12deg] sm:h-[105px] sm:w-[105px]"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <defs>
            <linearGradient id="creatorTriangle" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DFFF00" />
              <stop offset="100%" stopColor="#B5EA00" />
            </linearGradient>
          </defs>
          <path
            d="M50 5 L94 91 L7 91 Z"
            fill="url(#creatorTriangle)"
            stroke="#DFFF00"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Right white blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-9 top-[7%] h-[210px] w-[125px] rotate-[20deg] rounded-[48%_52%_45%_55%] bg-white sm:-right-7 sm:h-[235px] sm:w-[145px]"
      />

      {/* Left white blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-[43%] h-[110px] w-[75px] rotate-[15deg] rounded-[42%_58%_48%_52%] bg-white sm:left-[-20px] sm:h-[120px] sm:w-[85px]"
      />

      {/* Bottom-left lime ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[105px] left-[5%] h-[190px] w-[190px] rounded-full border-[45px] border-[#C7FF00] sm:-bottom-[125px] sm:h-[230px] sm:w-[230px] sm:border-[52px]"
      />

      {/* Bottom-right lime squiggle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[28px] right-[4%] h-[125px] w-[120px] rotate-[7deg] sm:-bottom-[35px] sm:right-[5%] sm:h-[145px] sm:w-[140px]"
      >
        <Squiggle color="#C7FF00" />
      </div>
    </>
  );
}

function Squiggle({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 15C30 8 53 9 65 17C75 24 67 33 51 35C32 38 15 42 20 52C25 62 51 61 68 58C82 56 83 64 72 72C60 80 37 78 29 88"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
  );
}