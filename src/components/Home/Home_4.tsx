import {
  CheckCircle2,
  Star,
} from "lucide-react";
import Avatars from "../UI/Avatars";

const IMAGES = {
  heroPerson: "",
  creatorPerson: "/image/home-creator-person.png",
};

export default function Home_4() {
  return (
    <main className="w-full overflow-hidden bg-white">
      {/* =========================================================
          TOP / HERO
      ========================================================== */}
      <section className="relative w-full bg-[radial-gradient(circle_at_28%_25%,rgba(215,255,75,0.24),transparent_34%),radial-gradient(circle_at_93%_18%,rgba(216,224,255,0.55),transparent_38%),linear-gradient(135deg,#ffffff_0%,#ffffff_52%,#f4f6ff_100%)]">
        {/* subtle lime edge from the reference */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-[#B9F500]" />

        <div className="mx-auto grid min-h-[610px] w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 py-12 sm:px-8 md:min-h-[700px] md:px-10 lg:grid-cols-2 lg:gap-10 lg:px-16 xl:px-[66px]">
          {/* Left copy */}
          <div className="relative z-10 max-w-[540px] justify-self-center lg:justify-self-start">
            <h1 className="max-w-[440px] text-[31px] font-bold leading-[1.08] tracking-[-1.1px] text-[#24262D] sm:text-[37px] md:text-[40px]">
              Your Path to Professional
              <br className="hidden sm:block" />
              Growth Starts Here!
            </h1>

            <p className="mt-6 max-w-[470px] text-[12px] leading-[1.75] text-[#737781] sm:text-[13px]">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you&apos;re looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>

            <div className="mt-7 flex items-start gap-8 sm:gap-10">
              <Stat value="12K" label="Students" />
              <Stat value="70+" label="Courses" />
              <Stat value="16" label="Creators" />
            </div>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto h-[390px] w-full max-w-[600px] sm:h-[455px] lg:h-[500px] lg:max-w-[600px]">
            {/* Course preview card */}
            <div className="absolute left-[4%] top-[4%] z-20 w-[205px] overflow-hidden rounded-[14px] border border-[#D9DCE3] bg-white shadow-[0_10px_25px_rgba(20,25,40,0.08)] sm:left-[8%] sm:w-[225px]">
              <div className="h-[112px] overflow-hidden bg-[#EEF1F4]">
                <img
                  src="/images/course-3.jpg"
                  alt="Course Preview"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-3">
                <p className="truncate text-[13px] font-bold text-[#20232A]">
                  Learn Figma from Scratch
                </p>
                <p className="mt-1 text-[8px] text-[#7B8089]">
                  by purposeful studio
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#F1F2F4] px-2 py-1 text-[8px] text-[#60656D]">
                    Beginner
                  </span>
                  <span className="text-[10px] font-bold text-[#064DFF]">
                    $25
                    <small className="font-normal text-[#858992]">/Lifetime</small>
                  </span>
                </div>
              </div>
            </div>

            {/* Person image */}
            <img
              src="/images/happy-student-on-a-transparent-background-png.webp"
              alt="Professional learner"
              className="absolute bottom-[4%] left-1/2 z-30 h-auto max-h-[355px] w-auto max-w-[82%] -translate-x-1/2 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.22)] sm:max-h-[430px] lg:left-[53%] lg:max-h-[465px]"
            />

            {/* Progress card */}
            <div className="absolute right-[2%] top-[31%] z-40 w-[145px] rounded-[12px] bg-white p-3 shadow-[0_12px_28px_rgba(25,31,50,0.12)] sm:right-[4%] sm:w-[160px]">
              <p className="text-[8px] text-[#666B74]">Learning Progress</p>
              <p className="mt-1 text-[25px] font-bold leading-none text-[#282A30]">
                55%
              </p>
              <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-[#E9EBEF]">
                <div className="h-full w-[55%] rounded-full bg-[#C7FF00]" />
              </div>
            </div>

            {/* Lime decorative strokes */}
            <div className="pointer-events-none absolute right-[3%] top-[14%] z-40 rotate-[-8deg]">
              <LimeStroke />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CREATOR / COURSE MANAGEMENT
      ========================================================== */}
      <section className="relative w-full bg-[radial-gradient(circle_at_10%_62%,rgba(207,255,60,0.38),transparent_24%),radial-gradient(circle_at_96%_70%,rgba(211,220,255,0.7),transparent_37%),linear-gradient(120deg,#ffffff_0%,#ffffff_55%,#f3f5ff_100%)]">
        <div className="mx-auto grid min-h-[570px] w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 md:min-h-[650px] md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16 xl:px-[66px]">
          {/* Creator visual */}
          <div className="relative mx-auto h-[390px] w-full max-w-[580px] sm:h-[460px] lg:h-[510px]">
            {/* Revenue cards */}
            <RevenueCard
              className="left-[3%] top-[16%]"
              title="Total Revenue"
              value="$120.29"
              date="14 Jan 2023"
            />
            <RevenueCard
              className="left-[3%] top-[40%]"
              title="Year to Date"
              value="$1,200.38"
              date="2023"
              smallValue="+12%"
            />

            {/* Creator */}
            <img
              src="/images/student_png.webp"
              alt="Course creator"
              className="absolute rounded-2xl bottom-[1%] left-[34%] z-20 h-auto max-h-[390px] w-auto max-w-[68%] -translate-x-1/2 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.20)] sm:max-h-[470px] lg:left-[38%] lg:max-h-[500px]"
            />

            {/* Lime decoration */}
            <div className="absolute left-[43%] top-[26%] z-30 rotate-[12deg]">
              <LimeStroke />
            </div>

            {/* Happy students card */}
            <div className="absolute bottom-[13%] right-[2%] z-40 w-[175px] rounded-[12px] bg-white px-3 py-2.5 shadow-[0_10px_25px_rgba(20,25,40,0.12)] sm:right-[4%] sm:w-[195px]">
              <p className="text-[9px] font-medium text-[#24262D]">
                Happy Students
              </p>
              <div className="mt-1 flex items-center gap-1">
                <Star size={9} fill="currentColor" className="text-[#A9D900]" />
                <span className="text-[8px] text-[#6B7079]">4.5 (240)</span>
              </div>

              <Avatars></Avatars>
            </div>
          </div>

          {/* Right copy */}
          <div className="mx-auto w-full max-w-[500px] lg:mx-0">
            <h2 className="text-[31px] font-bold leading-[1.08] tracking-[-1px] text-[#292B31] sm:text-[37px]">
              Create &amp; Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-6 max-w-[465px] text-[12px] leading-[1.75] text-[#737781] sm:text-[13px]">
              <span className="font-bold text-[#292B31]">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            <ul className="mt-6 space-y-2.5">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[11px] text-[#2E3036]"
                >
                  <CheckCircle2
                    size={13}
                    fill="#064DFF"
                    className="shrink-0 text-white"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------
   Small reusable pieces
------------------------------------------------------------------- */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-[19px] font-medium leading-none tracking-[-0.5px] text-[#064DFF] sm:text-[20px]">
        {value}
      </p>
      <p className="mt-1 text-[9px] text-[#777C84] sm:text-[10px]">{label}</p>
    </div>
  );
}

function RevenueCard({
  className,
  title,
  value,
  date,
  smallValue,
}: {
  className?: string;
  title: string;
  value: string;
  date: string;
  smallValue?: string;
}) {
  return (
    <div
      className={`absolute z-10 w-[125px] rounded-[10px] bg-[#064DFF] px-3 py-2.5 text-white shadow-[0_8px_18px_rgba(6,77,255,0.14)] sm:w-[145px] ${className ?? ""}`}
    >
      <p className="text-[8px] opacity-90">{title}</p>
      <p className="text-[7px] opacity-75">{date}</p>
      <p className="mt-1 text-[13px] font-bold">{value}</p>

      <div className="mt-2 h-[5px] overflow-hidden rounded-full bg-[#D9E2FF]/40">
        <div className="h-full w-[78%] rounded-full bg-[#C7FF00]" />
      </div>

      {smallValue && (
        <span className="mt-2 inline-block rounded-full bg-[#C7FF00] px-1.5 py-0.5 text-[6px] font-bold text-[#172000]">
          {smallValue}
        </span>
      )}
    </div>
  );
}

function LimeStroke() {
  return (
    <svg
      width="86"
      height="100"
      viewBox="0 0 86 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M19 12C36 4 58 8 68 18C76 27 64 35 46 37C27 39 10 44 14 53C18 63 45 63 63 61C77 59 78 67 67 74C55 81 31 80 25 88"
        stroke="#C7FF00"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M25 87C35 91 49 90 59 85"
        stroke="#C7FF00"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  );
}
